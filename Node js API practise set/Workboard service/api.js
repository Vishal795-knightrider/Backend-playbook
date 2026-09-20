const express=require('express')
const router=express.Router()

const Tasks=[
  {
    id: 1,
    title: "Learn Node.js",
    status: "pending"
  },
  {
    id: 2,
    title: "Build REST API",
    status: "in-progress"
  },
  {
    id: 3,
    title: "Practice Express",
    status: "completed"
  }
];

const validStatuses = ["pending", "in-progress", "completed"];

router.get('/api/taks',(req,res)=>{
  return res.status(200).json({
    taska:Tasks
  })
})


router.post('/api/tasks',(req,res)=>{
  const title=req.body.title
  const status=req.body.title
  if(!title || (status!='pending' && status!='in-progress' && status!='completed')){
    return res.status(400).json({
      message:"Please provide valid task details"
    })
  }

  if(!validStatuses.includes(status)){

  }
  const task={ 
    id:Tasks.length+1,
    title:title,
    status:status
  }

  Tasks.push(task)
  return res.status(200).json({
    message:"task suces",
    task:task
  })
})

router.patch('/api/tasks/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const task=Tasks.find(task=>task.id===id)
  if(!task){
    res.status(404).json({
      message:"Task not found"
    })
  }
  if(req.body.title!==undefined){
    task.title=req.body.title
  }
   if(req.body.status !== undefined){
        if (!validStatuses.includes(req.body.status)) {
            return res.status(400).json({
                message: "Invalid status"
            });
        }
        task.status = req.body.status;
    }

    return res.status(200).json({
        message: "Task updated successfully",
        task
    });
  
})

router.delete('/api/tasks/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  const idx=Tasks.findIndex(task=>task.id===id)
  if(idx==-1){
    res.status(404).json({
      message:"invalid"
    })
  }
  Tasks.splice(idx,1)
  return res.status(200).json({
    message:"suces"
  })
})

router.get('/api/tasks/status/:status',(req,res)=>{
  const status=req.params.status
  const tasks=Tasks.filter(task=>task.status===status)
  return res.json({
    tasks
  })
})