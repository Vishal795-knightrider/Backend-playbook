const express=require('express')
const router =express.Router()

router.get('/area',(req,res)=>{
  const width=parseInt(req.query.width)
  if(width<=0){
    res.status(400).json({
      message:"invalid width"
    })
  }
  const area=width*width
  res.json({area})
})

router.get('/parameter',(req,res)=>{
  const width=parseInt(req.query.width)
  if(width<=0){
    res.status(400).json({
      message:"invalid width"
    })
  }
  const area=4*width
  res.json({area})  
})


module.exports=router;


// Implement following fn in the backedn/src/employeeControllers.js file to handle employee data

// getAllEmployess:Fetch and return all employess form the database
// getEmployeeById:Retrieve and return an employee by thei unique IdleDeadline
// createEmployee: add a new employee to the database with the provided details
// updateEmployee:Update an existing employee in the database based on their id
// deleteEmployee:Remove an employee from the database by their id