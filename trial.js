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

app.get('student/:id',(req,res,next)=>{
  if(req.params.id==='0')
    next('route')
  else
    next()
},
(req,res)=>{
  res.end('Regular Route')
})

app.get('/student/:id',(req,res)=>{
  res.end('special route')
})

//Error handling Middleware
app.use((err,req,res,next)=>{
  console.log(err.stack)
  res.status().send
})

app.listen(PORT,()=>{
  console.log("server okk")  
})