const express=require('express')
const app=express()

const taskroute=require('./taskRoute')
app.use(json())

app.use('/',taskroute)

app.listen(3000,(req,res)=>{
  console.log("server okk")
})