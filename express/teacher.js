const express=require('express')
const app=express()

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
    name: "anuj",
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
  const id=req.params.id
  const teach=teachers.find(it=>it.id===id)
  if(!teach){
    res.status(404).json({
      message:"not found"
    })
  }
  res.json(teach)
})

app.listen(3000,()=>{
  console.log("server is okkk")
})