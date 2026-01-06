const database = require("../../database");

// GET institutes
function getInstitutes(callback) {
  database.query("SELECT * FROM institute", (err, result) => {
    callback(err, result);
  });
}

// CREATE institute
function createInstitute(institute, callback) {
  database.query(
    "INSERT INTO institute (institute_name, franchise_id) VALUES ($1, $2)",
    [institute.institute_name, institute.franchise_id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE institute
function updateInstitute(id, institute, callback) {
  database.query(
    "UPDATE institute SET institute_name=$1, franchise_id=$2 WHERE institute_id=$3",
    [institute.institute_name, institute.franchise_id, id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE institute
function deleteInstitute(id, callback) {
  database.query(
    "DELETE FROM institute WHERE institute_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// Get institute using ID
function getInstituteById(id, callback) {
  database.query(
    "SELECT * FROM institute WHERE institute_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}
module.exports = {
  getInstitutes,
  createInstitute,
  updateInstitute,
  deleteInstitute,
  getInstituteById
};
