const database = require("../../database");

// GET all staff roles
function getStaffRoles(callback) {
  database.query("SELECT * FROM staff_role", (err, result) => {
    callback(err, result);
  });
}

// CREATE staff role
function createStaffRole(role, callback) {
  database.query(
    "INSERT INTO staff_role (role_name) VALUES ($1)",
    [role.role_name],
    (err, result) => {
      callback(err, result);
    }
  );
}

// UPDATE staff role
function updateStaffRole(id, role, callback) {
  database.query(
    "UPDATE staff_role SET role_name=$1 WHERE role_id=$2",
    [role.role_name, id],
    (err, result) => {
      callback(err, result);
    }
  );
}

// DELETE staff role
function deleteStaffRole(id, callback) {
  database.query(
    "DELETE FROM staff_role WHERE role_id=$1",
    [id],
    (err, result) => {
      callback(err, result);
    }
  );
}

module.exports = {
  getStaffRoles,
  createStaffRole,
  updateStaffRole,
  deleteStaffRole
};
