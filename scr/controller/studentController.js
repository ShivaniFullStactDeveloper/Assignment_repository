const studentService = require("../services/studentQuery");

// GET students
function getStudents(req, res) {
  studentService.getStudents((err, result) => {
    if (err) {
      return res.status(500).send("Error getting students");
    }
    res.status(200).json(result.rows);
  });
}

// CREATE student
function createStudent(req, res) {
  const student = req.body;

  studentService.createStudent(student, (err) => {
    if (err) {
      return res.status(500).send("Error saving student");
    }
    res.status(201).send("Student saved successfully");
  });
}

// UPDATE student
function updateStudent(req, res) {
  const id = req.params.id;
  const student = req.body;

  studentService.updateStudent(id, student, (err, result) => {
    if (err) {
      return res.status(500).send("Error updating student");
    }
    if (result.rowCount === 0) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send("Student updated successfully");
  });
}

// DELETE student
function deleteStudent(req, res) {
  const id = req.params.id;

  studentService.deleteStudent(id, (err) => {
    if (err) {
      return res.status(500).send("Error deleting student");
    }
    res.status(200).send("Student deleted successfully");
  });
}

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
};
