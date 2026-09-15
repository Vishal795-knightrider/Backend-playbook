require('dotenv').config()

const express = require('express'); 
const app = express(); 
const mongoose=require('mongoose')

app.use(express.json())

const PORT=process.env.PORT||3000
const studentRoutes = require('./Routes/studentRoutes'); 

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("database connected")
})
.catch((error)=>{
    console.log("Database can not connected",error)
})


//Global routing  //global middlearw 
// app.use((req,res,next)=>{
//     console.log("Request coming from",req.originalUrl)
//     console.log("Requested method",req.method)
//     next()
// })

app.use('/students', studentRoutes); //jab incoming req ka url /students hoga express us req ko agee handle krne ke liye studentRoutes file ke hawale kr dega

app.listen(PORT, () => { 
    console.log('server okkk'); 
});