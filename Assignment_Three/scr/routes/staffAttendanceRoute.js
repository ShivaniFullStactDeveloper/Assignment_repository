const express = require("express");
const router = express.Router();
const staffAttendanceController = require("../controller/staffAttendanceController");

// GET all staff attendance
router.get("/staffs-attendance", staffAttendanceController.getStaffAttendance);

// CREATE staff attendance
router.post("/staff-attendance", staffAttendanceController.createStaffAttendance);

// UPDATE staff attendance
router.put("/staff-attendance/:id", staffAttendanceController.updateStaffAttendance);

// DELETE staff attendance
router.delete("/staff-attendance/:id", staffAttendanceController.deleteStaffAttendance);

module.exports = router;
