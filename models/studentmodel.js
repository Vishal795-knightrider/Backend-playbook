const mongoose=require('mongoose')

const studentSchema=mongoose.Schema({
  user:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  course:{
    type:String,
    required:true
  }
})

const Student=mongoose.model("student",studentSchema)
module.exports=Student