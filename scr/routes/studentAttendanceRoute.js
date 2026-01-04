const express = require("express");
const router = express.Router();
const studentAttendanceController = require("../controller/studentAttendanceController");

// GET all student attendance
router.get("/student-attendance", studentAttendanceController.getStudentAttendance);

// CREATE student attendance
router.post("/student-attendance", studentAttendanceController.createStudentAttendance);

// UPDATE student attendance
router.put("/student-attendance/:id", studentAttendanceController.updateStudentAttendance);

// DELETE student attendance
router.delete("/student-attendance/:id", studentAttendanceController.deleteStudentAttendance);

module.exports = router;
