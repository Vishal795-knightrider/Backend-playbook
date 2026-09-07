const express=require('express')
const app=express()
const PORT=8000

app.use((req,res,next)=>{
  console.log("middleware1")
  console.log("req type",req.method)
  next()
})


app.use((req,res,next)=>{
  console.log("middleware2")
  next()
})

app.get('/',(req,res)=>{    //app.get is a mttod that act as a middle ware
  res.send("thanks")
})


//3.Multiple Route Handler
app.use("/student",(req,res,next)=>{
  console.log("requested method",req.method)
},
(req,res,next)=>{
  console.log("requested Url",req.originalUrl)
})

app.listen(PORT,()=>{
  console.log("server okk")  
})