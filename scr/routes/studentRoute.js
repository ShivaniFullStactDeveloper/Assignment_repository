const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

// GET all students
router.get("/students", studentController.getStudents);

// CREATE student
router.post("/student", studentController.createStudent);

// UPDATE student
router.put("/student/:id", studentController.updateStudent);

// DELETE student
router.delete("/student/:id", studentController.deleteStudent);

module.exports = router;
