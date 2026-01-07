//  ID validation
const validateClassId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id || isNaN(id) || Number(id) <= 0) {
      return res.status(400).json({
        error: "Invalid Class id"
      });
    }
  
    next();
  };

//   Request body validation
  const validateClass = (req, res, next) => {
    const { class_name, teacher_id } = req.body;
  
    if (!class_name) {
      return res.status(400).json({ error: "class_name required" });
    }
  
    if (!teacher_id || isNaN(teacher_id)) {
      return res.status(400).json({ error: "teacher_id invalid" });
    }
  
    next();
  };

  module.exports = {
    validateClassId,
    validateClass
  };
  