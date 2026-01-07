//  ID validation
const validateInstituteId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id || isNaN(id) || Number(id) <= 0) {
      return res.status(400).json({
        error: "Invalid Institute id"
      });
    }
  
    next();
  };

const validateInstitute = (req, res, next) => {
    const { institute_name, franchise_id } = req.body;
  
    if (!institute_name) {
      return res.status(400).json({ error: "institute_name required" });
    }
  
    if (!franchise_id || isNaN(franchise_id)) {
      return res.status(400).json({ error: "franchise_id invalid" });
    }
  
    next();
  };
  
  module.exports = {
    validateInstituteId,
    validateInstitute
  };
  