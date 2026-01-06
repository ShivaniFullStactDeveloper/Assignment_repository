const database = require("../../database");

// GET all classes
function getClasses(callback) {
  database.query("SELECT * FROM classes", (err, result) => {
    callback(err, result);
  });
}

// CREATE class
function createClass(classData, callback) {
  database.query(
    "INSERT INTO classes (class_name) VALUES ($1)",
    [classData.class_name],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE class
function updateClass(id, classData, callback) {
  database.query(
    "UPDATE classes SET class_name=$1 WHERE class_id=$2",
    [classData.class_name, id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE class
function deleteClass(id, callback) {
  database.query(
    "DELETE FROM classes WHERE class_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// Get class using ID
function getClassById(id, callback) {
  database.query(
    "SELECT * FROM classes WHERE class_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

module.exports = {
  getClasses,
  createClass,
  updateClass,
  deleteClass,
  getClassById
};
