const classService = require("../services/classQuery");

// GET
function getClasses(req, res) {
  classService.getClasses((err, result) => {
    if (err) {
      res.status(500).send("Error getting classes");
    } else {
      res.status(200).json(result.rows);
    }
  });
}

// CREATE
function createClass(req, res) {
  const classData = req.body;

  classService.createClass(classData, (err) => {
    if (err) {
      res.status(500).send("Error creating class");
    } else {
      res.status(201).send("Class created successfully");
    }
  });
}

// UPDATE
function updateClass(req, res) {
  const id = req.params.id;
  const classData = req.body;

  classService.updateClass(id, classData, (err, result) => {
    if (err) {
      res.status(500).send("Error updating class");
    } else if (result.rowCount === 0) {
      res.status(404).send("Class not found");
    } else {
      res.status(200).send("Class updated successfully");
    }
  });
}

// DELETE
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

module.exports = {
  getClasses,
  createClass,
  updateClass,
  deleteClass
};
