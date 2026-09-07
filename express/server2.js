const express = require('express'); 
const app = express(); 
const studentRoutes = require('../Routes/studentRoutes'); 

app.use(express.json()); 

//Global routing
app.use((req,res,next)=>{
    console.log("Request coming from",req.originalUrl)
    console.log("Requested method",req.method)
    next()
})

app.use('/students', studentRoutes); 

app.listen(3000, () => { 
    console.log('server okkk'); 
});