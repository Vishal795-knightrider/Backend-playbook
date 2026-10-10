const express=require('express')
const router=express.Router()
let tasks=[
  {
    id:1,
    title:"dsa"
  },{
    id:2,
    title:"dev"
  }
]


router.get('/api/task',(req,res)=>{
  res.status(200).json(tasks)
})

router.post('/api/task',(req,res)=>{
  const {title} = req.body;

  if(!title||!title.trim()){
    return res.status(400).json({
      message: 'title mandoatoru'
    });
  }

    const newTask={
      id:taskid++,
      title: title.trim()
    };

    tasks.push(newTask);
    res.status(201).json({
        message: 'Task added successfully',
        task: newTask
    });
})

router.delete('/api/task/:id',(req,res)=>{
  const id=parseInt(req.params.id)
  if(!id)
    return res.status(401).json({message:"id required"})

  const idx=tasks.findIndex(task=>task.id===id);
  if(idx===-1){
    return res.status(404).json({message: 'Task not found'});
  }
  tasks.splice(index, 1);
  res.status(200).json({message: 'Task deleted successfully'});
})

module.exports=router