const express = require("express");
const router = express.Router();
const subjectController = require("../controller/subjectController");

// GET all subjects
router.get("/subjects", subjectController.getSubjects);

// CREATE subject
router.post("/subject", subjectController.createSubject);

// UPDATE subject
router.put("/subject/:id", subjectController.updateSubject);

// DELETE subject
router.delete("/subject/:id", subjectController.deleteSubject);

module.exports = router;
