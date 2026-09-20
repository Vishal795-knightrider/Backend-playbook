const express=require('express')
const router=express.Router()


const Polls=[
    {
      id: 1,
      question:"in which lang. do you code",
      options:[
        { id: 1, text: "C++", votes: 0 },
        { id: 2, text: "Java", votes: 0 }
      ]
    },
    {
      id: 2,
      question:"Which OS do you use?",
      options:[
          { id: 1, text: "Windows", votes: 0 },
          { id: 2, text: "Linux", votes: 0 }
      ]
    }
];


router.get('/polls',(req,res)=>{
  return res.json({Polls})
})

router.get('/polls/:id',(req,res)=>{
  const id=req.params.id;
  const poll=Polls.find(poll=>poll.id==id)
  if(!poll){
    return res.json({message:"Poll not found"})
  }
  return res.json(poll)
})

router.post('/vote',(req,res)=>{
  const pollid=req.body.pollid
  const optionid=req.body.optionid
  if(!pollid || !optionid){
    return res.status(400).json({
      message:"Pollid and optionid are required"
    })
  }
  const poll=Polls.find(poll=>poll.id===pollid)
  if(!poll){
    return res.status(404).json({
      message:"poll nto found"
    })
  }
 
  const option=poll.options.find(option=>option.id===optionid)
  if(!option){
    return res.status(404).json({
      message: "invalid option"
    });
  }
  option.votes++;
  return res.json({
    message:"vote recorded sucessfully",
    poll
  })
})

router.get('/polls/:id/results',(req,res)=>{
  const id=parseInt(req.params.id)
  const poll=Polls.find(poll=>poll.id===id)
  if(!poll){
    return res.status(400).json({
      message:"poll not found"
    })
  }

  const totalresponses=poll.options.reduce((sum,option)=>sum+option.votes,0)
  return res.json({
    pollid:poll.id,
    question:poll.question,
    results:poll.options,
    totalresponses

  })
})


module.exports=router;

