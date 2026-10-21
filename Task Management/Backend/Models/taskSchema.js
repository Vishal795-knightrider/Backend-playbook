const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
  title:{
        type:String,
        required:true,
        trim:true
    },
    task:{
        type:String,
        required:true
    },
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
})

const tasks=mongoose.model("Task",taskSchema)
module.exports=tasks