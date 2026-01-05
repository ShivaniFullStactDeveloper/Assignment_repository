const database = require("../../database");

// GET all staff attendance
function getStaffAttendance(callback) {
  database.query("SELECT * FROM staff_attendance", (err, result) => {
    callback(err, result);
  });
}

// CREATE staff attendance
function createStaffAttendance(attendance, callback) {
  database.query(
    `INSERT INTO staff_attendance
     (staff_id, attendance_date, attendance_time, attendance_status)
     VALUES ($1, $2, $3, $4)`,
    [
      attendance.staff_id,
      attendance.attendance_date,
      attendance.attendance_time,
      attendance.attendance_status
    ],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE staff attendance
function updateStaffAttendance(id, attendance, callback) {
  database.query(
    `UPDATE staff_attendance
     SET staff_id=$1, attendance_date=$2, attendance_time=$3, attendance_status=$4
     WHERE attendance_id=$5`,
    [
      attendance.staff_id,
      attendance.attendance_date,
      attendance.attendance_time,
      attendance.attendance_status,
      id
    ],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE staff attendance
function deleteStaffAttendance(id, callback) {
  database.query(
    "DELETE FROM staff_attendance WHERE attendance_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

module.exports = {
  getStaffAttendance,
  createStaffAttendance,
  updateStaffAttendance,
  deleteStaffAttendance
};
