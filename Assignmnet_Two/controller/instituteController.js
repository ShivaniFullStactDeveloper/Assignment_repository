const instituteService = require("../services/instituteQuery");

// GET
function getInstitutes(req, res) {
  instituteService.getInstitutes((err, result) => {
    if (err) {
      res.status(500).send("Error getting institutes");
    }
      res.status(200).json(result.rows);
  });
}

// CREATE
function createInstitute(req, res) {
  const institute = req.body;

  instituteService.createInstitute(institute, (err) => {
    if (err) {
      res.status(500).send("Error creating institute");
    }
    res.status(200).json("Institute created successfully");
  });
}

// UPDATE
function updateInstitute(req, res) {
  const id = req.params.id;
  const institute = req.body;

  instituteService.updateInstitute(id, institute, (err, result) => {
    if (err) {
      res.status(500).send("Error updating institute");
    } else if (result.rowCount === 0) {
      res.status(404).send("Institute not found");
    } 
    res.status(200).json("Institute updated successfully");
  });
}

// DELETE
function deleteInstitute(req, res) {
  const id = req.params.id;

  instituteService.deleteInstitute(id, (err) => {
    if (err) {
      res.status(500).send("Error deleting institute");
    } 
      res.status(200).send("Institute deleted successfully");
  });
}

// GET institute by ID
const getInstituteById = (req, res) => {
  const id = req.params.id;

  studentService.getInstituteById(id, (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching student");
    }
    if (result.rows.length === 0) {
      return res.status(404).send("Student not found");
    }
    res.status(200).json(result.rows[0]);
  });
};

module.exports = {
  getInstitutes,
  createInstitute,
  updateInstitute,
  deleteInstitute,
  getInstituteById
};
