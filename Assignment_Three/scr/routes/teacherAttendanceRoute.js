const express = require("express");
const router = express.Router();
const teacherAttendanceController = require("../controller/teacherAttendanceController");

// GET all teacher attendance
router.get("/teachers-attendance", teacherAttendanceController.getTeacherAttendance);

// CREATE teacher attendance
router.post("/teacher-attendance", teacherAttendanceController.createTeacherAttendance);

// UPDATE teacher attendance
router.put("/teacher-attendance/:id", teacherAttendanceController.updateTeacherAttendance);

// DELETE teacher attendance
router.delete("/teacher-attendance/:id", teacherAttendanceController.deleteTeacherAttendance);

module.exports = router;
