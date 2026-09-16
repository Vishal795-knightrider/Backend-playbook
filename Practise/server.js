const express=require('express')
const app=express()
const square=require('./Routes/square')
const rectangle=require('./Routes/rectangle')


app.use('/square',square)
app.use('/rectangle',rectangle)


app.listen(3000,()=>{
  console.log("Server okk")
})