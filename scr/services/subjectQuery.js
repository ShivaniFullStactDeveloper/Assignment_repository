const database = require("../../database");

// GET all subjects
function getSubjects(callback) {
  database.query("SELECT * FROM subject", (err, result) => {
    callback(err, result);
  });
}

// CREATE subject
function createSubject(subject, callback) {
  database.query(
    "INSERT INTO subject (subject_name) VALUES ($1)",
    [subject.subject_name],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE subject
function updateSubject(id, subject, callback) {
  database.query(
    "UPDATE subject SET subject_name=$1 WHERE subject_id=$2",
    [subject.subject_name, id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE subject
function deleteSubject(id, callback) {
  database.query(
    "DELETE FROM subject WHERE subject_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

module.exports = {
  getSubjects,
  createSubject,
  updateSubject,
  deleteSubject
};
