const database = require("../../database");

// GET all staff
function getStaff(callback) {
  database.query("SELECT * FROM staff", (err, result) => {
    callback(err, result);
  });
}

// CREATE staff
function createStaff(staff, callback) {
  database.query(
    "INSERT INTO staff (staff_name, role_id, institute_id) VALUES ($1, $2, $3)",
    [staff.staff_name, staff.role_id, staff.institute_id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE staff
function updateStaff(id, staff, callback) {
  database.query(
    "UPDATE staff SET staff_name=$1, role_id=$2, institute_id=$3 WHERE staff_id=$4",
    [staff.staff_name, staff.role_id, staff.institute_id, id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE staff
function deleteStaff(id, callback) {
  database.query(
    "DELETE FROM staff WHERE staff_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

module.exports = {
  getStaff,
  createStaff,
  updateStaff,
  deleteStaff
};
