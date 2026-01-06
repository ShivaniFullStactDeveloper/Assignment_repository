const express = require("express");
const router = express.Router();
const classController = require("../controller/classController");

// GET all classes
router.get("/classes", classController.getClasses);

// CREATE class
router.post("/class", classController.createClass);

// UPDATE class
router.put("/class/:id", classController.updateClass);

// DELETE class
router.delete("/class/:id", classController.deleteClass);

// GET class By ID
router.get("/class/:id", classController.getClassById);

// Expoet file
module.exports = router;
