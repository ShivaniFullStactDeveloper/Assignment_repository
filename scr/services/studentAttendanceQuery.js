const database = require("../../database");

// GET all student attendance
function getStudentAttendance(callback) {
  database.query("SELECT * FROM student_attendance", (err, result) => {
    callback(err, result);
  });
}

// CREATE student attendance
function createStudentAttendance(attendance, callback) {
  database.query(
    `INSERT INTO student_attendance
     (student_id, attendance_date, attendance_status)
     VALUES ($1, $2, $3)`,
    [
      attendance.student_id,
      attendance.attendance_date,
      attendance.attendance_status
    ],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE student attendance
function updateStudentAttendance(id, attendance, callback) {
  database.query(
    `UPDATE student_attendance
     SET student_id=$1, attendance_date=$2, attendance_status=$3
     WHERE attendance_id=$4`,
    [
      attendance.student_id,
      attendance.attendance_date,
      attendance.attendance_status,
      id
    ],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE student attendance
function deleteStudentAttendance(id, callback) {
  database.query(
    "DELETE FROM student_attendance WHERE attendance_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

module.exports = {
  getStudentAttendance,
  createStudentAttendance,
  updateStudentAttendance,
  deleteStudentAttendance
};
