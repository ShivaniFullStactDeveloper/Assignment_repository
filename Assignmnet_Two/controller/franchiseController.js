const franchiseService = require("../services/franchiseQuery");

// GET
function getFranchises(req, res) {
  franchiseService.getFranchises((err, result) => {
    if (err) {
      res.status(500).send("Error getting franchises");
    } 
      res.status(200).json(result.rows);
  });
}

// CREATE
function createFranchise(req, res) {
  franchiseService.createFranchise(req.body, (err) => {
    if (err) {
      res.status(500).send("Error creating franchise");
    } 
     res.status(200).json("Franchise created successfully");
  });
}

// UPDATE
function updateFranchise(req, res) {
  const id = req.params.id;

  franchiseService.updateFranchise(id, req.body, (err, result) => {
    if (err) {
      res.status(500).send("Error updating franchise");
    } else if (result.rowCount === 0) {
      res.status(404).send("Franchise not found");
    }
    res.status(200).json("Franchise updated successfully");
  });
}

// DELETE
function deleteFranchise(req, res) {
  const id = req.params.id;

  franchiseService.deleteFranchise(id, (err) => {
    if (err) {
      res.status(500).send("Error deleting franchise");
    } else {
      res.status(200).send("Franchise deleted");
    }
  });
}

// GET franchise by ID
const getFranchiseById = (req, res) => {
  const id = req.params.id;

  studentService.getFrinchiseById(id, (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching student");
    }
    if (result.rows.length === 0) {
      return res.status(404).send("Student not found");
    }
    res.status(200).json(result.rows[0]);
  });
};

// Export functions
module.exports = {
  getFranchises,
  createFranchise,
  updateFranchise,
  deleteFranchise,
  getFranchiseById
};
