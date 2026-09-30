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

//add contact
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

//delete contact
router.delete('/delete/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const check=Contacts.find(i=>i.id===id)

  if(!check){
    return res.status(404).json({
      message:"contact not found"
    })
  }

  Contacts.splice(Contacts.indexOf(check),1)

  return res.json({
    message:"contact successfully deleted",
    check
  })
})

//put contact
router.put('/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const check=Contacts.find(i=>i.id===id)

  if(!check){
    return res.status(404).json({
      message:"contact not found"
    })
  }

  check.name=req.body.name
  check.email=req.body.email
  check.phone=req.body.phone

  return res.json({
    message:"contact successfully updated",
    check
  })
})

//patch contact
router.patch('/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const check=Contacts.find(i=>i.id===id)

  if(!check){
    return res.status(404).json({
      message:"contact not found"
    })
  }

  if(req.body.name){
    check.name=req.body.name
  }

  if(req.body.email){
    check.email=req.body.email
  }

  if(req.body.phone){
    check.phone=req.body.phone
  }

  return res.json({
    message:"contact successfully updated",
    check
  })
})

module.exports=router