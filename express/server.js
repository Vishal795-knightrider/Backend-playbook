const express = require('express')     // importing module 
const app = express()  
app.use(express.json())        //middleware

let students=[
{
    id:1,
    name: "vishal",
    course: "Btech"
},
{
    id:2,
    name: "rohan",
    course: "bca"
}
];

app.get("/students", (req, res) => {
    res.json(students)
})

app.get("/students/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const stud=students.find(student=>student.id===id)
    if(!stud){
        res.status(404).json({
            message:"not found"
        })
    }
    res.json(stud)
})

app.post("/students",(req,res)=>{
    const newStud={
        id:students.length+1,
        name:req.body.name,
        course:req.body.course
    }
    students.push(newStud)

    res.status(201).json({
        message:"inseretd succes",
        new_Student:newStud
    })
})

app.delete("/students/:id",(req,res)=>{
    const id =parseInt(req.params.id)
    const idx=students.findIndex(student=>student.id===id)
    if(idx==-1){
        res.status(404).json({
            message:"not foudn"
        })
    }
    students.splice(idx,1)
    res.json({
        message:"deleted succes",
        student:students
    })
})

app.put("/students/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const studnt=students.find(student=>student.id===id)

    if(!studnt){
        res.status(404).json({
            message:"not found"
        })
    }
    studnt.name=req.body.name
    studnt.course=req.body.name
    res.json(studnt)
})

app.patch("/students/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const stud=students.find(student=>student.id===id)
    if(!stud){
        res.status(404).json({
            mesage:"not foudn"
        })
    }
    if(req.body.name!==undefined) stud.name=req.body.name
    if(req.body.course!==undefined) stud.course=req.body.course

    res.json(stud)
})

app.listen(3000,()=>{
    console.log("okkk");
})