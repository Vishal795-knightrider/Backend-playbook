const express=require('express')
const app=express()
const rating=require('./rating')
app.use(express.json())

app.use('/api',rating)

app.listen(3000,()=>{
  console.log("server okkk")
})