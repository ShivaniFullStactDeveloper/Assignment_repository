//  ID validation
const validateStudentId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id || isNaN(id) || Number(id) <= 0) {
      return res.status(400).json({
        error: "Invalid student id"
      });
    }
  
    next();
  };
  
  // Request body validation
  const validateStudent = (req, res, next) => {
    const {
      student_name,
      roll_no,
      gender,
      date_of_birth,
      contact_no,
      email,
      institute_id,
      class_id
    } = req.body;
  
    if (!student_name) {
      return res.status(400).json({ error: "student_name is required" });
    }
  
    if (!roll_no || isNaN(roll_no)) {
      return res.status(400).json({ error: "roll_no must be a number" });
    }
  
    if (!gender) {
      return res.status(400).json({ error: "gender is required" });
    }
  
    if (!date_of_birth || isNaN(Date.parse(date_of_birth))) {
      return res.status(400).json({ error: "Invalid date_of_birth" });
    }
  
    if (!contact_no || contact_no.length < 10) {
      return res.status(400).json({ error: "Invalid contact_no" });
    }
  
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email" });
    }
  
    if (!institute_id || isNaN(institute_id)) {
      return res.status(400).json({ error: "Invalid institute_id" });
    }
  
    if (!class_id || isNaN(class_id)) {
      return res.status(400).json({ error: "Invalid class_id" });
    }
  
    next(); // All are valid
  };
  
  module.exports = {
    validateStudentId,
    validateStudent
  };
    
