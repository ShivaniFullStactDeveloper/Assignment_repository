const franchiseService = require("../services/franchiseQuery");

// GET
function getFranchises(req, res) {
  franchiseService.getFranchises((err, result) => {
    if (err) {
      res.status(500).send("Error getting franchises");
    } else {
      res.status(200).json(result.rows);
    }
  });
}

// CREATE
function createFranchise(req, res) {
  franchiseService.createFranchise(req.body, (err) => {
    if (err) {
      res.status(500).send("Error creating franchise");
    } else {
      res.status(201).send("Franchise created");
    }
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
    } else {
      res.status(200).send("Franchise updated");
    }
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

module.exports = {
  getFranchises,
  createFranchise,
  updateFranchise,
  deleteFranchise
};
