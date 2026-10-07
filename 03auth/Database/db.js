const mongoose=require('mongoose')

const connectDb=async()=>{
  try{
    mongoose.connect(process.env.MONGODB_URI)
    console.log("mongodb connceted")
  }
  catch(err){
    console.log("db connection failed",err.message)
    process.exit(1)   //agar db connect nhi hua to server stop krdo
  }
}

module.exports=connectDb