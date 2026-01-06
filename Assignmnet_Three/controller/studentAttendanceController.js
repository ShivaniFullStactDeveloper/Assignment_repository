const attendanceService = require("../services/studentAttendanceQuery");

// GET
function getStudentAttendance(req, res) {
  attendanceService.getStudentAttendance((err, result) => {
    if (err) {
      res.status(500).send("Error getting student attendance");
    } 
      res.status(200).json(result.rows);
  });
}

// CREATE
function createStudentAttendance(req, res) {
  const attendance = req.body;

  attendanceService.createStudentAttendance(attendance, (err) => {
    if (err) {
      res.status(500).send("Error creating student attendance");
    } 
      res.status(201).send("Student attendance marked successfully");
  });
}

// UPDATE
function updateStudentAttendance(req, res) {
  const id = req.params.id;
  const attendance = req.body;

  attendanceService.updateStudentAttendance(id, attendance, (err, result) => {
    if (err) {
      res.status(500).send("Error updating student attendance");
    } else if (result.rowCount === 0) {
      res.status(404).send("Attendance record not found");
    } 
      res.status(200).send("Student attendance updated successfully");
  });
}

// DELETE
function deleteStudentAttendance(req, res) {
  const id = req.params.id;

  attendanceService.deleteStudentAttendance(id, (err) => {
    if (err) {
      res.status(500).send("Error deleting student attendance");
    } 
      res.status(200).send("Student attendance deleted successfully");
  });
}

module.exports = {
  getStudentAttendance,
  createStudentAttendance,
  updateStudentAttendance,
  deleteStudentAttendance
};
