const express = require("express");
const router = express.Router();
const staffController = require("../controller/staffController");

// GET all staff
router.get("/staff", staffController.getStaff);

// CREATE staff
router.post("/staff", staffController.createStaff);

// UPDATE staff
router.put("/staff/:id", staffController.updateStaff);

// DELETE staff
router.delete("/staff/:id", staffController.deleteStaff);

module.exports = router;
