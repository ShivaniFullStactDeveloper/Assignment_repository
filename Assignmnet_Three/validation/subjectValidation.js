//  ID validation
const validateSubjectId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id || isNaN(id) || Number(id) <= 0) {
      return res.status(400).json({
        error: "Invalid Subject id"
      });
    }
  
    next();
  };

const validateSubject = (req, res, next) => {
    const { subject_name, class_id } = req.body;
  
    if (!subject_name){
      return res.status(400).json({ error: "subject_name required" });
    }
    if (!class_id || isNaN(class_id)){
      return res.status(400).json({ error: "class_id invalid" });
    }

    next();
  };

  module.exports = {
    validateSubjectId,
    validateSubject
  };
    
  