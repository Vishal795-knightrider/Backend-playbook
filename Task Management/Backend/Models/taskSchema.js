const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
  title:{
        type:String,
        required:true,
        trim:true
    }
})

const tasks=mongoose.model("Task",taskSchema)
module.exports=tasks