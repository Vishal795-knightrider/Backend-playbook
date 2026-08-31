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
    res.json(stud);
})

// app.post("/students/:id",(req,res)=>{
//     const newStudent={
//         id:students.length+1,
//         name:req.body.name,
//         course:req.body.course
//     }
//     students.push(newStudent)

//     res.status(201).json({
//         message:"student insert sucess",
//         student:newStudent
//     })
// })

// app.delete("/students/:id",(req,res)=>{
//     const id=parseInt(req.params.id)
//     const idx=students.findIndex(student=>student.id===id)

//     if(idx==-1){
//         res.status(404).json({
//             message:"not found"
//         })
//     }
//     students.splice(idx,1)
// })

app.listen(3000,()=>{
    console.log("okkk");
})