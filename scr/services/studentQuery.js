const database = require("../../database");

// GET students
function getStudents(callback) {
  database.query("SELECT * FROM students", (err, result) => {
    callback(err, result);
  });
}

// CREATE student
function createStudent(student, callback) {
  database.query(
    "INSERT INTO student (student_name, roll_no, gender, date_of_birth, contact_no,  email, address, institute_id, class_id ) VALUES ($1,$2,$3, $4, $5, $6, $7,$8, $9)",
    [student.student_name, student.roll_no, student.gender, student.date_of_birth, student.contact_no,  student.emai, student.address, student.institute_id, student.class_id ],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE student
function updateStudent(id, student, callback) {
  database.query(
    "UPDATE student SET student_name=$1, roll_no=$2, gender=$3, date_of_birth=$4, contact_no=$5,  email=$6, address=$7, institute_id=$8, class_id=$9  WHERE student_id=$10",
    [student.student_name, student.roll_no, student.gender, student.date_of_birth, student.contact_no,  student.emai, student.address, student.institute_id, student.class_id , id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE student
function deleteStudent(id, callback) {
  database.query(
    "DELETE FROM student WHERE student_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
};
