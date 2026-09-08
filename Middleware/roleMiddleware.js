const checkrole=(...allowedroles)=>{     //checkrole = isme ya to student hoga ya [studnet,teacheer] 
  return (req,res,next)=>{
    const role=req.headers.role;    //role hame header me dalna hai  like=role:admin
    if(!role){
      return res.status(403).json({message:"Role is not provided"})
    }
    if(allowedroles.includes(role)){
      next();
    }
    else{
      return res.status(403).json({message:"You not allowed to access"})
    }
  }
}

module.exports=checkrole