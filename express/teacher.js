const express=require('express')
const app=express()

app.use(express.json())

let teachers=[
{
    id:1,
    name: "anuj",
    exp : 10,
    depart: "cs"
},
{
    id:2,
    name: "rohan",
    exp : 12,
    depart: "cse"
},
{
    id:3,
    name: "ritik",
    exp : 5,
    depart: "aiml"
},
{
  id:4,
  name:"swati",
  exp:15,
  depart: "cs"
}
];


//all teachers
app.get("/",(req,res)=>{
  res.json(teachers)
})

//teachers by id
app.get("/teachers/:id",(req,res)=>{
  const id=parseInt(req.params.id)
  const teach=teachers.find(it=>it.id===id)
  if(!teach){
    res.status(404).json({
      message:"not found"
    })
  }
  res.json(teach)
})

app.post("/teachers",(req,res)=>{
  const newteach={
    id:teachers.length+1,
    name:req.body.name,
    exp:req.body.exp,
    depart:req.body.depart
  }
  teachers.push(newteach)
  res.status(200).json({
    message:"insert ho gya bhai",
    inserted_record: newteach
  })
})

app.delete("/teachers/:id",(req,res)=>{
  const id=parseInt(req.params.id)
  const idx=teachers.findIndex(it=>it.id===id)
  if(idx==-1){
    res.status(404).json({
      message:"data nto found"
    })
  }
  teachers.splice(idx,1)
  res.status(200).json({
    message:"succesfully deleyted"
  })
})

app.put("/teachers/:id",(req,res)=>{
  const id=parseInt(req.params.id)
  const teachFind=teachers.find(it=>it.id===id)
  if(!teachFind){
    res.status(404).json({
      message:"Not found"
    })
  }
  teachFind.name=req.body.name
  teachFind.exp=req.body.exp
  teachFind.depart=req.body.depart
  res.status(200).json({
    message:"updated successfully",
    updated_record:teachFind
  })
})

app.patch("/teachers/:id",(req,res)=>{
  const id=parseInt(req.params.id)
  const teachFind=teachers.find(it=>it.id===id)
  if(!teachFind){
    res.status(404).json({
      message:"Not found"
    })
  }
  if(req.body.name!==undefined) teachFind.name=req.body.name
  if(req.body.exp!==undefined) teachFind.exp=req.body.exp
  if(req.body.depart!==undefined) teachFind.depart=req.body.depart
  res.json(teachFind)

})

app.listen(3000,()=>{
  console.log("server is okkk")
})