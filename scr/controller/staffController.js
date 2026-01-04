const staffService = require("../services/staffQuery");

// GET
function getStaff(req, res) {
  staffService.getStaff((err, result) => {
    if (err) {
      res.status(500).send("Error getting staff");
    } else {
      res.status(200).json(result.rows);
    }
  });
}

// CREATE
function createStaff(req, res) {
  const staff = req.body;

  staffService.createStaff(staff, (err) => {
    if (err) {
      res.status(500).send("Error creating staff");
    } else {
      res.status(201).send("Staff created successfully");
    }
  });
}

// UPDATE
function updateStaff(req, res) {
  const id = req.params.id;
  const staff = req.body;

  staffService.updateStaff(id, staff, (err, result) => {
    if (err) {
      res.status(500).send("Error updating staff");
    } else if (result.rowCount === 0) {
      res.status(404).send("Staff not found");
    } else {
      res.status(200).send("Staff updated successfully");
    }
  });
}

// DELETE
function deleteStaff(req, res) {
  const id = req.params.id;

  staffService.deleteStaff(id, (err) => {
    if (err) {
      res.status(500).send("Error deleting staff");
    } else {
      res.status(200).send("Staff deleted successfully");
    }
  });
}

module.exports = {
  getStaff,
  createStaff,
  updateStaff,
  deleteStaff
};
