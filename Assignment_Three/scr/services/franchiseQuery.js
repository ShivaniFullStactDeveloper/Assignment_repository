const database = require("../../database");
// GET Frinchises
function getFranchises(callback) {
  database.query("SELECT * FROM franchises", (err, result) => {
    callback(err, result);
  });
}
// Post Franichise
function createFranchise(data, callback) {
  database.query(
    "INSERT INTO franchises(franchise_name) VALUES($1)",
    [data.franchise_name],
    (err, result) => {
      callback(err, result);
    }
  );
}
// Update Franichise
function updateFranchise(id, data, callback) {
  database.query(
    "UPDATE franchises SET franchise_name=$1 WHERE franchise_id=$2",
    [data.franchise_name, id],
    (err, result) => {
      callback(err, result);
    }
  );
}
// Delete Franichise
function deleteFranchise(id, callback) {
  database.query(
    "DELETE FROM franchises WHERE franchise_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

module.exports = {
  getFranchises,
  createFranchise,
  updateFranchise,
  deleteFranchise
};
