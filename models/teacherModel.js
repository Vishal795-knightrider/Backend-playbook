const teacherSchema=mongoose.Schema({
  user:{
    type:String,
    required:true
  },
  age:{
    type:number,
    required:true
  },
  depart:{
    type:String,
    required:true
  }
})

const Teacher=mongoose.model("teacher",studentSchema)
module.exports=Teacher