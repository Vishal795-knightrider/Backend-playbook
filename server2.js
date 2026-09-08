const express = require('express'); 
const app = express(); 
const studentRoutes = require('./Routes/studentRoutes'); 

app.use(express.json()); 

//Global routing  //global middlearw 
// app.use((req,res,next)=>{
//     console.log("Request coming from",req.originalUrl)
//     console.log("Requested method",req.method)
//     next()
// })

app.use('/students', studentRoutes); //jab incoming req ka url /students hoga express us req ko agee handle krne ke liye studentRoutes file ke hawale kr dega

app.listen(3000, () => { 
    console.log('server okkk'); 
});