const express=require('express')
const router =express.Router()


const Events=[
  {
    id: 1,
    name: "Web Development Workshop",
    regCnt: 0
  },
  {
    id: 2,
    name: "Node.js Workshop",
    regCnt: 0
  },
  {
  id: 3,
  name: "AI & Machine Learning Workshop",
  regCnt: 0
  }
];

router.get('/events',(req,res)=>{
  return res.status(200).json({
    message:"Events retrieved successfully",
    Events:Events
  })
})

router.post('/register',(req,res)=>{
  const eventId=req.body.eventId
  if(eventId===undefined){
    return res.status(400).json({
      message:"eventId is required"
    })
  }
  const event=Events.find(a=>a.id==eventId)
  if(!event){
    return res.status(404).json({
      message:"Event not found"
    })
  }
  event.regCnt++;
  return res.status(200).json({
    message:"Registration successful",
    Event:event
  })
})

router.get('/events/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const event=Events.find(i=>i.id==id)
  if(!event){
    return res.status(404).json({
      message:"Event not found"
    })
  }
  
  return res.status(200).json({
    Event:event
  })
})

router.post('/cancel',(req,res)=>{
  const eventId=req.body.eventId
  if(eventId===undefined){
    return res.status(400).json({
      message:"Invalid id"
    })
  }
  const event=Events.find(i=>i.id==eventId)
  if(!event){
    return res.status(404).json({
      message:"Event not found"
    })
  }
  if(event.regCnt>=1){
    event.regCnt--
  }
  return res.status(200).json({
    message: "Cancellation successful",
    Event: event
});
})