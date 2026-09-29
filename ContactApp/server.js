const express=require('express')
const app=express()
const contact=require('./contactApi')

app.use(express.json())

app.use('/contact',contact)

app.listen(3000,()=>{
  console.log("server okk")
})