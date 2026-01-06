const database = require("../../database");

// GET all teachers
function getTeachers(callback) {
  database.query("SELECT * FROM teachers", (err, result) => {
    callback(err, result);
  });
}

// CREATE teacher
function createTeacher(teacher, callback) {
  database.query(
    "INSERT INTO teachers (teacher_name, subject_id, institute_id) VALUES ($1, $2, $3)",
    [teacher.teacher_name, teacher.subject_id, teacher.institute_id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE teacher
function updateTeacher(id, teacher, callback) {
  database.query(
    "UPDATE teachers SET teacher_name=$1, subject_id=$2, institute_id=$3 WHERE teacher_id=$4",
    [teacher.teacher_name, teacher.subject_id, teacher.institute_id, id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE teacher
function deleteTeacher(id, callback) {
  database.query(
    "DELETE FROM teachers WHERE teacher_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

module.exports = {
  getTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher
};
