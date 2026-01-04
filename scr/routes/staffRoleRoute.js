const express = require("express");
const router = express.Router();
const staffRoleController = require("../controller/staffRoleController");

// GET all staff roles
router.get("/staff-roles", staffRoleController.getStaffRoles);

// CREATE staff role
router.post("/staff-role", staffRoleController.createStaffRole);

// UPDATE staff role
router.put("/staff-role/:id", staffRoleController.updateStaffRole);

// DELETE staff role
router.delete("/staff-role/:id", staffRoleController.deleteStaffRole);

module.exports = router;
