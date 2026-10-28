const reqcnt={};
const Limit=5;

const rateLimit=(req,res,next)=>{
  const ip=req.ip
  const time=Date.now();

  if(!reqcnt[ip]) reqcnt[ip]=1;
  else reqcnt[ip]++;

  if(reqcnt[ip]>limit) return res.status(404).json({
    message: "too manu request"
  })


  next();
}

module.exports=rateLimit;  