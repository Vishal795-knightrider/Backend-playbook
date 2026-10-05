require('dotenv').config()

const jwt=require('jsonwebtoken')
const getToken=(user)=>{
  jwt.sign(
    {
      user:user.email,               //payload is encoded not encryted that's why we dont use importnat info here
      id:user._id
    },
    process.env.SECRET_KEY,
    {
      expiresIn:'1h'
    }
  )
}

module.exports=getToken