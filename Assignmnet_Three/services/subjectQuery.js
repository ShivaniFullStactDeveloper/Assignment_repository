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
    "INSERT INTO subject (subject_name, class_id) VALUES ($1, $2)",
    [subject.subject_name, subject.class_id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE subject
function updateSubject(id, subject, callback) {
  database.query(
    "UPDATE subject SET subject_name=$1, class_id=$2 WHERE subject_id=$3",
    [subject.subject_name, subject.class_id, id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE subject
function deleteSubject(id, callback) {
  database.query(
    "DELETE FROM subject WHERE subject_id=$1, class_id=$2",
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
