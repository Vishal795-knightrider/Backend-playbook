const express=require('express')
const mongoose = require('mongoose');

const router=express.Router()
const Tasks=require("../Models/taskSchema")
const User=require("../Models/userSchema");
const tasks = require('../Models/taskSchema');


router.get('/api/task',async(req,res)=>{
  const page=parseInt(req.query.page,10) ||1           ///,10 signifies number system like thr the np. we  taking shou;b ebe decimal no. 
  const limit =parseInt(req.query.limit,10) ||10

  const sanitizePage=page>1?page:1
  const sanitizeLimit=limit<1?10:limit
  const skip=(sanitizePage-1)*sanitizeLimit

  const {task,totalTask}=await Promise.all([
    Tasks.find().populate("User","name","email").sort({createdAt:-1}).skip(skip).limit(sanitizeLimit),
    Tasks.countDocument()
  ])

  const totalPages=Math.ceil(totalTask/sanitizelimit)

  res.status(200).josn({
    metadata:{
      totalTask,
      totalPages,
      currentPage:sanitizePage,
      hasPrevious:sanitizePage>1,
      hasNext:sanitizePage<totalPages
    }
  })




  // try {
  //   const tasks = await Tasks.find().populate('userId','name','email');    //.populate ka matlau us ref table me se konsa colummn chsnahiey
  //   res.status(200).json(tasks);
  // }
  // catch(error){
  //   res.status(500).json({
  //     message: "Error fetching Tasks",
  //     error: error.message
  //   });
  // }
})

router.post('/api/task',async(req,res)=>{
  try{
    const {title,task}=req.body;
    
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




router.get('/api/task',async(req,res)=>{
  const limit=parseInt(req.query.limit);
  const sanitizeLimit=limit<1?10:limit

  const {nextCursor}=req.query
  const query={}

  if(nextCursor)     //next cursor me value iska matlan uski query change krni hai
  if(!mongoose.isValidObjectId){ 
    return res.status().json({
      success:false,

    })
  }
  query._id={lt$:new mongoose}


  const task=Task.find(query).sort({id:-1}).limit(limit+1)

  const hasNext=task.length>sanitizedLimit

  if(hasNext)
  task.pop()

  const lastitem=task[task.lenght-1]
  const newCursor=hasNext&&lastitem?lastitem.id:null

  res.status().json({
    success:true,   
    metadata:{
      limit:santizelimit,
      nextCursor
    },
    data:task
  })
})


