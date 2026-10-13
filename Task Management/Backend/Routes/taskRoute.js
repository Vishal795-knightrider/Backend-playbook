const express=require('express')
const router=express.Router()
const Tasks=require("../Models/taskSchema")

router.get('/api/task',async(req,res)=>{
  try {
    const tasks = await Tasks.find();
    res.status(200).json(tasks);
  }
  catch(error){
    res.status(500).json({
      message: "Error fetching Tasks",
      error: error.message
    });
  }
})

router.post('/api/task',async(req,res)=>{
  try{
    const {title}=req.body;
    
    if(typeof title!=='string'||!title.trim()){
      return res.status(400).json({
        message: 'Title mandatory'
      });
    }

    const newTask =new Tasks({
      title:title.trim()
    });
    const saveTask = await newTask.save();

    res.status(201).json({
      message: 'Task added successfully',
      task: saveTask
    });
  }catch(err){
    res.status(500).json({
      message: 'error whiel ading task',
      error: err.message
    });
  }
});

router.delete('/api/task/:id',async(req, res)=>{
  try{
    const {id} =req.params;
    if (!require('mongoose').Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Invalid task ID'
      });
    }

    const deletedTask=await Tasks.findByIdAndDelete(id);
    if (!deletedTask){
      return res.status(404).json({
        message:'task not found'
      });
    }

    res.status(200).json({
      message:'Task deleted successfully',
      task: deletedTask
    });
  }
  catch(err){
    res.status(500).json({
      message:'eror whiel deletiing the task',
      error:err.message
    });
  }
});

module.exports=router