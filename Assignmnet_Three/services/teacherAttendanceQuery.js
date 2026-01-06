const database = require("../../database");

// GET all teacher attendance
function getTeacherAttendance(callback) {
  database.query("SELECT * FROM teacher_attendance", (err, result) => {
    callback(err, result);
  });
}

// CREATE teacher attendance
function createTeacherAttendance(attendance, callback) {
  database.query(
    `INSERT INTO teacher_attendance
     (teacher_id, attendance_date, attendance_time, attendance_status)
     VALUES ($1, $2, $3, $4)`,
    [
      attendance.teacher_id,
      attendance.attendance_date,
      attendance.attendance_time,
      attendance.attendance_status
    ],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE teacher attendance
function updateTeacherAttendance(id, attendance, callback) {
  database.query(
    `UPDATE teacher_attendance
     SET teacher_id=$1, attendance_date=$2, attendance_time=$3, attendance_status=$4
     WHERE attendance_id=$5`,
    [
      attendance.teacher_id,
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

// DELETE teacher attendance
function deleteTeacherAttendance(id, callback) {
  database.query(
    "DELETE FROM teacher_attendance WHERE attendance_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

module.exports = {
  getTeacherAttendance,
  createTeacherAttendance,
  updateTeacherAttendance,
  deleteTeacherAttendance
};
