const attendanceService = require("../services/teacherAttendanceQuery");

// GET
function getTeacherAttendance(req, res) {
  attendanceService.getTeacherAttendance((err, result) => {
    if (err) {
      res.status(500).send("Error getting teacher attendance");
    } else {
      res.status(200).json(result.rows);
    }
  });
}

// CREATE
function createTeacherAttendance(req, res) {
  const attendance = req.body;

  attendanceService.createTeacherAttendance(attendance, (err) => {
    if (err) {
      res.status(500).send("Error creating teacher attendance");
    } else {
      res.status(201).send("Teacher attendance marked successfully");
    }
  });
}

// UPDATE
function updateTeacherAttendance(req, res) {
  const id = req.params.id;
  const attendance = req.body;

  attendanceService.updateTeacherAttendance(id, attendance, (err, result) => {
    if (err) {
      res.status(500).send("Error updating teacher attendance");
    } else if (result.rowCount === 0) {
      res.status(404).send("Attendance record not found");
    } else {
      res.status(200).send("Teacher attendance updated successfully");
    }
  });
}

// DELETE
function deleteTeacherAttendance(req, res) {
  const id = req.params.id;

  attendanceService.deleteTeacherAttendance(id, (err) => {
    if (err) {
      res.status(500).send("Error deleting teacher attendance");
    } else {
      res.status(200).send("Teacher attendance deleted successfully");
    }
  });
}

module.exports = {
  getTeacherAttendance,
  createTeacherAttendance,
  updateTeacherAttendance,
  deleteTeacherAttendance
};
