const express=require('express')
const app=express()
app.use(express.json())
const api=require('./api')

app.use('/api',api)

app.listen(3000,(req,res)=>{
  console.log("server ok")
})