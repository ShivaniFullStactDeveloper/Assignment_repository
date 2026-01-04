const teacherService = require("../services/teacherQuery");

// GET
function getTeachers(req, res) {
  teacherService.getTeachers((err, result) => {
    if (err) {
      res.status(500).send("Error getting teachers");
    } else {
      res.status(200).json(result.rows);
    }
  });
}

// CREATE
function createTeacher(req, res) {
  const teacher = req.body;

  teacherService.createTeacher(teacher, (err) => {
    if (err) {
      res.status(500).send("Error creating teacher");
    } else {
      res.status(201).send("Teacher created successfully");
    }
  });
}

// UPDATE
function updateTeacher(req, res) {
  const id = req.params.id;
  const teacher = req.body;

  teacherService.updateTeacher(id, teacher, (err, result) => {
    if (err) {
      res.status(500).send("Error updating teacher");
    } else if (result.rowCount === 0) {
      res.status(404).send("Teacher not found");
    } else {
      res.status(200).send("Teacher updated successfully");
    }
  });
}

// DELETE
function deleteTeacher(req, res) {
  const id = req.params.id;

  teacherService.deleteTeacher(id, (err) => {
    if (err) {
      res.status(500).send("Error deleting teacher");
    } else {
      res.status(200).send("Teacher deleted successfully");
    }
  });
}

module.exports = {
  getTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher
};
