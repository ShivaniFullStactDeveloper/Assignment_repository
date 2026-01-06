const classService = require("../services/classQuery");

// CREATE class
function createClass(req, res) {
  const classData = req.body;

  classService.createClass(classData, (err) => {
    if (err) {
      res.status(500).send("Error creating class");
    } 
    res.status(200).json(" Class created successfully");
  });
}

// GET class
function getClasses(req, res) {
  classService.getClasses((err, result) => {
    if (err) {
      res.status(500).send("Error getting classes");
    }
      res.status(200).json(result.rows);
  });
}

// UPDATE class
function updateClass(req, res) {
  const id = req.params.id;
  const classData = req.body;

  classService.updateClass(id, classData, (err, result) => {
    if (err) {
      res.status(500).send("Error updating class");
    } else if (result.rowCount === 0) {
      res.status(404).send("Class not found");
    } 
    res.status(200).json(" Class updated successfully");
  });
}

// DELETE class
function deleteClass(req, res) {
  const id = req.params.id;

  classService.deleteClass(id, (err) => {
    if (err) {
      res.status(500).send("Error deleting class");
    } else {
      res.status(200).send("Class deleted successfully");
    }
  });
}

// GET class by ID
const getClassById = (req, res) => {
  const id = req.params.id;

  studentService.getClassById(id, (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching student");
    }
    if (result.rows.length === 0) {
      return res.status(404).send("Student not found");
    }
    res.status(200).json(result.rows[0]);
  });
};

// Export function
module.exports = {
  getClasses,
  createClass,
  updateClass,
  deleteClass,
  getClassById
};
