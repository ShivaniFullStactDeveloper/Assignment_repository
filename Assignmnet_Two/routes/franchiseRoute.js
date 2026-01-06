const express = require("express");
const router = express.Router();
const franchiseController = require("../controller/franchiseController");

// Gte franchise
router.get("/franchises", franchiseController.getFranchises);
// Create franchise
router.post("/franchise", franchiseController.createFranchise);
// Update franchise
router.put("/franchise/:id", franchiseController.updateFranchise);
// delete franchise
router.delete("/franchise/:id", franchiseController.deleteFranchise);
// GET franchise By ID
router.get("/franchise/:id", franchiseController.getFranchiseById);

module.exports = router;
