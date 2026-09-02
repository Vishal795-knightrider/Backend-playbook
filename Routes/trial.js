const express=require("express");
const app=express();

const studentRoutes = require('../Routes/studentRoutes'); 

app.use(express.json()); 
app.use('/students', studentRoutes); 

app.use((req,res,next)=>{
  console.log("middleware executed")
  next();              //next is middle ware used to excute next middle ware     //me execute ho gya dusra middle ware execute karo  
})

app.get("/",(req,res)=>{
  res.end("Home page it is")
})

app.listen(3000,(req,res)=>{
  console.log("okkkk")
})