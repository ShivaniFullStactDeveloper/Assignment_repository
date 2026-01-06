const staffRoleService = require("../services/staffRoleQuery");

// GET
function getStaffRoles(req, res) {
  staffRoleService.getStaffRoles((err, result) => {
    if (err) {
      res.status(500).send("Error getting staff roles");
    } else {
      res.status(200).json(result.rows);
    }
  });
}

// CREATE
function createStaffRole(req, res) {
  const role = req.body;

  staffRoleService.createStaffRole(role, (err) => {
    if (err) {
      res.status(500).send("Error creating staff role");
    } 
      res.status(201).send("Staff role created successfully");
  });
}

// UPDATE
function updateStaffRole(req, res) {
  const id = req.params.id;
  const role = req.body;

  staffRoleService.updateStaffRole(id, role, (err, result) => {
    if (err) {
      res.status(500).send("Error updating staff role");
    } else if (result.rowCount === 0) {
      res.status(404).send("Staff role not found");
    } 
      res.status(200).send("Staff role updated successfully");
  });
}

// DELETE
function deleteStaffRole(req, res) {
  const id = req.params.id;

  staffRoleService.deleteStaffRole(id, (err) => {
    if (err) {
      res.status(500).send("Error deleting staff role");
    } 
      res.status(200).send("Staff role deleted successfully");
  });
}

module.exports = {
  getStaffRoles,
  createStaffRole,
  updateStaffRole,
  deleteStaffRole
};
