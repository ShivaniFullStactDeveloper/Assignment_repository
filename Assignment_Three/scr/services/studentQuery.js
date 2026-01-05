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
    "INSERT INTO students (student_name, roll_no, gender, date_of_birth, contact_no,  email, address, institute_id, class_id ) VALUES ($1,$2,$3, $4, $5, $6, $7,$8, $9)",
    [student.student_name, student.roll_no, student.gender, student.date_of_birth, student.contact_no,  student.email, student.address, student.institute_id, student.class_id ],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE student
function updateStudent(id, student, callback) {
  database.query(
    "UPDATE students SET student_name=$1, roll_no=$2, gender=$3, date_of_birth=$4, contact_no=$5,  email=$6, address=$7, institute_id=$8, class_id=$9  WHERE student_id=$10",
    [student.student_name, student.roll_no, student.gender, student.date_of_birth, student.contact_no,  student.email, student.address, student.institute_id, student.class_id , id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE student
function deleteStudent(id, callback) {
  database.query(
    "DELETE FROM students WHERE student_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

//    GET students with JOIN 
// GET students with JOIN
const joinStudents = (callback) => {
  const joinQuery = `
    SELECT
      s.student_id,
      s.student_name,
      s.roll_no,
      s.gender,
      s.date_of_birth,
      s.contact_no,
      s.email,
      s.address,
      c.class_name,
      i.institute_name,
      f.franchise_name,
      a.attendance_status,
      a.attendance_date
    FROM students s
    JOIN classes c ON s.class_id = c.class_id
    JOIN institute i ON s.institute_id = i.institute_id
    JOIN franchises f ON i.franchise_id = f.franchise_id
    JOIN student_attendance a ON s.student_id = a.student_id
  `;

  database.query(joinQuery, (err, result) => {
    callback(err, result);
  });
};

// Get student using ID
function getStudentById(id, callback) {
  database.query(
    "SELECT * FROM students WHERE student_id=$1",
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
  deleteStudent,
  joinStudents,
  getStudentById
};
