//  ID validation
const validateTeacherId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id || isNaN(id) || Number(id) <= 0) {
      return res.status(400).json({
        error: "Invalid Teacher id"
      });
    }
  
    next();
  };

const validateTeacher = (req, res, next) => {
    const { teacher_name, subject_id, institute_id } = req.body;
  
    if (!teacher_name){
         return res.status(400).json({ error: "teacher_name required" });
    }
    if (!subject_id || isNaN(subject_id)){
      return res.status(400).json({ error: "subject_id invalid" });
    }
    if (!institute_id || isNaN(institute_id)){
      return res.status(400).json({ error: "institute_id invalid" });
    }
  
    next();
  };
  
  module.exports = {
    validateTeacherId,
    validateTeacher
  };
  