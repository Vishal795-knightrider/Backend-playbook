require('dotenv').config()
const express=require('express')
const connectDB=require('./Database/db')
const authRoutes=require('./Routes/authRoute')

const app=express()
const PORT=process.env.PORT || 3000

connectDB();
app.use(express.json())

app.use('/auth',authRoutes)
app.listen(PORT,()=>{
  console.log("server okk")
})