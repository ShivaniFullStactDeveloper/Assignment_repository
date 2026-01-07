//  ID validation
const validateStaffId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id || isNaN(id) || Number(id) <= 0) {
      return res.status(400).json({
        error: "Invalid student id"
      });
    }
  
    next();
  };

const validateStaff = (req, res, next) => {
    const { staff_name, role_id, institute_id } = req.body;
  
    if (!staff_name){
        return res.status(400).json({ error: "staff_name required" });
    }
    if (!role_id || isNaN(role_id)){
      return res.status(400).json({ error: "role_id invalid" });
    }
    if (!institute_id || isNaN(institute_id)){
      return res.status(400).json({ error: "institute_id invalid" });
    }
  
    next();
  };

  
  module.exports = {
    validateStaffId,
    validateStaff
  };
    