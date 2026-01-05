const express = require("express");
const router = express.Router();
const teacherController = require("../controller/teacherController");

// GET all teachers
router.get("/teachers", teacherController.getTeachers);

// CREATE teacher
router.post("/teacher", teacherController.createTeacher);

// UPDATE teacher
router.put("/teacher/:id", teacherController.updateTeacher);

// DELETE teacher
router.delete("/teacher/:id", teacherController.deleteTeacher);

module.exports = router;
