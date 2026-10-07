const express=require('express')
const{registeredUser,loginUser}=require('../controllers/authController')
const router=express.Router()

router.post('/regiter',registeredUser)
router.post('/login',loginUser)

module.exports=router;
