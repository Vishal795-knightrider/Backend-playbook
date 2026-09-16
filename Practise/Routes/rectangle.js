const express=require('express')
const router =express.Router()

router.get("/area",(req,res)=>{
  const len=parseInt(req.query.length)
  const breadth=parseInt(req.query.breadth)
  const area=len*breadth
  res.json({area})
})

router.get('/parameter',(req,res)=>{
  const len=req.query.length
  const breadth=req.query.breadth
  const area=2*(len+breadth)
  res.json({area})
})


module.exports=router;