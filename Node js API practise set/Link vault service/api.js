const express=require(express)
const router=express.Router()


const Links=[
  {
    code: "abc123",
    username: "vishal",
    originalUrl: "https://example.com"
  },
  {
    code: "xyz789",
    username: "rahul",
    originalUrl: "https://google.com"
  },
  {
    code: "pqr456",
    username: "aman",
    originalUrl: "https://github.com"
  }
];


router.post('/api/shorten',(req,res)=>{
  const username=req.body.username
  const originalUrl=req.body.originalUrl
  if(!username || !originalUrl){
    res.status(400).json({
      message:"username and originalUrl are required"
    })
  }
  const code=Math.random().toString(36).substring(2,8)
  const link={
    code,
    username,
    originalUrl
  }
  Links.push(link)
  return res.status(200).json({
    message:"succes",
    code: code
  })
})

router.get('/api/url/:code',(req,res)=>{
  const code=req.params.code
  const link=Links.find(link=>link.code===code)
  if(!link){
    return res.status(404).json({
      message:"URL not found"
    })
  }
  return res.json({
    originalUrl: link.originalUrl,
    username:link.username
  })
})

router.get('/api/users/:username/urls',(req,res)=>{
  const username=req.params.username
  const links=Links.filter(link=>link.username==username)
  return res.status(200).json({
    username,
    links:links
  })
})

router.delete('/api/url/:code',(req,res)=>{
  const code=req.params.code
  const idx=Links.findIndex(link=>link.code===code)
  if(idx==-1){
    res.status(404).json({
      message:"unknowjn code"
    })
  }
  Links.splice(idx,1)
  return res.status(200).json({
    messfae:"deleted successfully",
  })
})