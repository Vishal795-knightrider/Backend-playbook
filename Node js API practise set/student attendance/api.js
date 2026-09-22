const express = require('express');
const router = express.Router();

const Students = [
    {
        id: 1,
        name: "Vishal",
        present: 0,
        absent: 0
    },
    {
        id: 2,
        name: "Rahul",
        present: 0,
        absent: 0
    },
    {
        id: 3,
        name: "Aman",
        present: 0,
        absent: 0
    }
];

router.get('/students', (req, res) => {

    return res.status(200).json({
        message: "Students retrieved successfully",
        Students
    });
});

router.post('/attendance', (req, res) => {

    const studentId = req.body.studentId;
    const status = req.body.status;

    if (
        studentId === undefined ||
        status === undefined
    ) {
        return res.status(400).json({
            message: "studentId and status are required"
        });
    }

    const student = Students.find(
        student => student.id == studentId
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    if (
        status !== "present" &&
        status !== "absent"
    ) {
        return res.status(400).json({
            message: "Invalid attendance status"
        });
    }

    if (status === "present") {
        student.present++;
    } else {
        student.absent++;
    }

    return res.status(200).json({
        message: "Attendance recorded successfully",
        student
    });
});

router.get('/attendance/:studentId', (req, res) => {

    const studentId = parseInt(req.params.studentId);

    const student = Students.find(
        student => student.id === studentId
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    return res.status(200).json({
        studentId: student.id,
        name: student.name,
        present: student.present,
        absent: student.absent
    });
});

router.get('/attendance', (req, res) => {

    let totalPresent = 0;
    let totalAbsent = 0;

    Students.forEach(student => {
        totalPresent += student.present;
        totalAbsent += student.absent;
    });

    return res.status(200).json({
        present: totalPresent,
        absent: totalAbsent
    });
});

module.exports = router;