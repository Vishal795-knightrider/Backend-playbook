const express=require('express')
const router=express.Router()

const Contacts=[
  {
    "id": 1,
    "name": "vishal",
    "email": "john.@example.com",
    "phone": 5550198
  },
  {
    "id": 2,
    "name": "rohan",
    "email": "rohan.@example.com",
    "phone": 5550245
  },
  {
    "id": 3,
    "name": "rinkiu",
    "email": "rinku.@example.com",
    "phone": 10390781
  },
]

//all contacts
router.get('/all',(req,res)=>{
  return res.status(200).json({
    Contacts,
    message:"all messages retrieved successfully"
  })
})

//contact by id
router.get('/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const check=Contacts.find(i=>i.id===id)
  if(!check){
    return res.status(404).json({
      message:"contact not found"
    })
  }
  return res.json({
    check,
    message:"contact sucessfully retreived"
  })
})

router.post('/add',(req,res)=>{
  const newCon={
    id:Contacts.length+1,
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone
  }
  Contacts.push(newCon)
  return res.json({
    message:"sucessfully new contact added",
    newCon
  })
})

router.delete('/delete/id',(req,res)=>{
  const id=parseInt(req.params.id)
  const check=Contacts.find(check=>check.id===id)
  if(id==-1){
    return res.json({
      message:"not found"
    })
  }
  Contacts.splice(id,1)
  return 

})


router.put('/')
module.exports=router