const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname,'../.env')
});

const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose')
const PORT=process.env.PORT||3000


const app = express();
const taskroute = require('./Routes/taskRoute');

mongoose.connect(process.env.MONGO_URI)     //it return a promise
.then(()=>{
console.log("database connected")
})
.catch((error)=>{
console.log("Databse not connected",error)
})

app.use(cors());
app.use(express.json());

app.use('/', taskroute);

app.listen(PORT,() => {
    console.log(`server running on ${PORT}`);
}); 