const subjectService = require("../services/subjectQuery");

// GET
function getSubjects(req, res) {
  subjectService.getSubjects((err, result) => {
    if (err) {
      res.status(500).send("Error getting subjects");
    } else {
      res.status(200).json(result.rows);
    }
  });
}

// CREATE
function createSubject(req, res) {
  const subject = req.body;

  subjectService.createSubject(subject, (err) => {
    if (err) {
      res.status(500).send("Error creating subject");
    } else {
      res.status(201).send("Subject created successfully");
    }
  });
}

// UPDATE
function updateSubject(req, res) {
  const id = req.params.id;
  const subject = req.body;

  subjectService.updateSubject(id, subject, (err, result) => {
    if (err) {
      res.status(500).send("Error updating subject");
    } else if (result.rowCount === 0) {
      res.status(404).send("Subject not found");
    } else {
      res.status(200).send("Subject updated successfully");
    }
  });
}

// DELETE
function deleteSubject(req, res) {
  const id = req.params.id;

  subjectService.deleteSubject(id, (err) => {
    if (err) {
      res.status(500).send("Error deleting subject");
    } else {
      res.status(200).send("Subject deleted successfully");
    }
  });
}

module.exports = {
  getSubjects,
  createSubject,
  updateSubject,
  deleteSubject
};
