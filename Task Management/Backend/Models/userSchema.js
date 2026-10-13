const mongoose=require('mongoose')

const userSchema=mongoose.connect({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  }
})

const User=mongoose.model("user",userSchema)
module.exports=User