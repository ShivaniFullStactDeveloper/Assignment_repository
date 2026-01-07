const validateAttendance = (req, res, next) => {
    const { attendance_date, attendance_status } = req.body;
  
    if (!attendance_date || isNaN(Date.parse(attendance_date))){
      return res.status(400).json({ error: "attendance_date invalid" });
    }
    if (!attendance_status || !["Present", "Absent"].includes(attendance_status)){
      return res.status(400).json({ error: "attendance_status invalid" });
    }
    next();
  };
  
  module.exports = {
    validateAttendance,
  };