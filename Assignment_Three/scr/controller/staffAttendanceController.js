const staffAttendanceService = require("../services/staffAttendanceQuery");

// GET
function getStaffAttendance(req, res) {
  staffAttendanceService.getStaffAttendance((err, result) => {
    if (err) {
      res.status(500).send("Error getting staff attendance");
    }
      res.status(200).json(result.rows);
  });
}

// CREATE
function createStaffAttendance(req, res) {
  const attendance = req.body;

  staffAttendanceService.createStaffAttendance(attendance, (err) => {
    if (err) {
      res.status(500).send("Error creating staff attendance");
    } 
      res.status(201).send("Staff attendance marked successfully \n");
  });
}

// UPDATE
function updateStaffAttendance(req, res) {
  const id = req.params.id;
  const attendance = req.body;

  staffAttendanceService.updateStaffAttendance(id, attendance, (err, result) => {
    if (err) {
      res.status(500).send("Error updating staff attendance");
    } else if (result.rowCount === 0) {
      res.status(404).send("Attendance record not found");
    } 
      res.status(200).send("Staff attendance updated successfully \n");
  });
}

// DELETE
function deleteStaffAttendance(req, res) {
  const id = req.params.id;

  staffAttendanceService.deleteStaffAttendance(id, (err) => {
    if (err) {
      res.status(500).send("Error deleting staff attendance");
    } 
      res.status(200).send("Staff attendance deleted successfully \n");
    
  });
}

module.exports = {
  getStaffAttendance,
  createStaffAttendance,
  updateStaffAttendance,
  deleteStaffAttendance
};
