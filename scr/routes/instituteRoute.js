const express = require("express");
const router = express.Router();
const instituteController = require("../controller/instituteController");

// GET all institutes
router.get("/institutes", instituteController.getInstitutes);

// CREATE institute
router.post("/institute", instituteController.createInstitute);

// UPDATE institute
router.put("/institute/:id", instituteController.updateInstitute);

// DELETE institute
router.delete("/institute/:id", instituteController.deleteInstitute);

module.exports = router;
