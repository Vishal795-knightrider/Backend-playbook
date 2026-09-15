const checkrole=require("../Middleware/roleMiddleware")
const express = require('express')   
const router =express.Router()  
const Student=require('../models/studentmodel')

// let students=[
// {
//     id:1,
//     name: "vishal",
//     course: "Btech"
// },
// {
//     id:2,
//     name: "rohan",
//     course: "bca"
// },
// {
//     id:3, 
//     name:"rahul",
//     course:"btech"
// }
// ];

//all students
router.get("/",checkrole("student", "teacher", "admin"),
  async (req, res)=>{
    try{
      const students = await Student.find();
      res.json(students);
    } 
    catch(err){
      res.status(404).json({
        message: err.message
      });
    }
  }
);

//get students by course
router.get('/search',checkrole("student","teacher","admin"),(req,res)=>{
    const course=req.query.course
    const result=students.filter(st=>st.course.toLowerCase()===course.toLowerCase())
    res.status(200).json(result)
})



// router.get("/:id",checkrole("student","teacher","admin"),(req,res)=>{
    // const id=parseInt(req.params.id)
    // const stud=students.find(student=>student.id===id)
    // if(!stud){
    //     res.status(404).json({           //without async or await try catch
    //         message:"not found"
    //     })
    // }
    // res.json(stud)

router.get("/:id",checkrole("student", "teacher", "admin"),
  async(req, res)=>{
    try{
      const id=req.params.id;
      const stud = await Student.findById(id);
      if (!stud) {
        return res.status(404).json({
          message: "not found"
        });
      }
      res.json(stud);

    }catch(err){
      res.status(500).json({
        message: err.message
      });
    }
  }
);



router.post("/",checkrole("teacher","admin"),
async(req,res)=>{

    // const newStud={
    //     id:students.length+1,     //yeh database se pehle wala code hai
    //     name:req.body.name,
    //     course:req.body.course
    // }
    // students.push(newStud)

    // res.status(201).json({
    //     message:"inseretd succes",
    //     new_Student:newStud
    // })

    // const student = new Student({
    //   user: req.body.user,
    //   age: req.body.age,
    //   course: req.body.course
    // });

    // student.save()
    //   .then((savedStudent) => {
    //     res.status(201).json({
    //       message: "Student created successfully",        //yeh databse ke baad wala
    //       data: savedStudent
    //     });
    //   })
    //   .catch((err) => {
    //     res.status(400).json({
    //       message: err.message
    //     })
    //   })       

    try {
      const student = new Student({
        user: req.body.user,
        age: req.body.age,
        course: req.body.course
      });

      const savedStudent = await student.save();

      res.status(201).json({
        message: "Student created successfully",
        data: savedStudent
      });

    } catch (err) {
      res.status(400).json({
        message: err.message
      });
    }     
})



router.delete("/:id",checkrole("admin"),
async(req,res)=>{

    // const id =parseInt(req.params.id)
    // const idx=students.findIndex(student=>student.id===id)
    // if(idx==-1){
    //     res.status(404).json({
    //         message:"not foudn"
    //     })
    // }
    // students.splice(idx,1)
    // res.json({
    //     message:"deleted succes",
    //     student:students
    // })

    try {
      const id = req.params.id;
      const deletedStudent = await Student.findByIdAndDelete(id);

      if (!deletedStudent) {
        return res.status(404).json({
          message: "not found"
        });
      }

      res.json({
        message: "deleted successfully",
        student: deletedStudent
      });

    }
    catch(err){
      res.status(500).json({
        message: err.message
      });
    }

})



router.put("/:id",checkrole("admin"),
async(req,res)=>{

    // const id=parseInt(req.params.id)
    // const studnt=students.find(student=>student.id===id)

    // if(!studnt){
    //     res.status(404).json({
    //         message:"not found" 
    //     })
    // }
    // studnt.name=req.body.name
    // studnt.course=req.body.course
    // res.json(studnt)

    try {
      const id = req.params.id;
      const deletedStudent = await Student.findByIdAndDelete(id);

      if (!deletedStudent) {
        return res.status(404).json({
          message: "not found"
        });
      }

      res.json({
        message: "deleted successfully",
        student: deletedStudent
      });

    } catch (err) {
      res.status(500).json({
        message: err.message
      });
    }

})

router.patch("/:id",checkrole("admin"),
async(req,res)=>{

    // const id=parseInt(req.params.id)
    // const stud=students.find(student=>student.id===id)
    // if(!stud){
    //     res.status(404).json({
    //         mesage:"not foudn"
    //     })
    // }
    // if(req.body.name!==undefined) stud.name=req.body.name
    // if(req.body.course!==undefined) stud.course=req.body.course

    // res.json(stud)

    try {
      const id = req.params.id;
      const updatedStudent = await Student.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

      if (!updatedStudent) {
        return res.status(404).json({
          message: "not found"
        });
      }
      res.json(updatedStudent);

    } catch (err) {
      res.status(500).json({
        message: err.message
      });
    }
    
})


module.exports=router