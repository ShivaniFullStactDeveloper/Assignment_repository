// Import express
const express = require("express");
const router = express.Router();

// import all routes
const studentRoute = require("./Assignmnet_Two/routes/studentRoute");
const franchiseRoute = require("./Assignmnet_Two/routes/franchiseRoute");
const instituteRoute = require("./Assignmnet_Two/routes/instituteRoute");
const classRoute = require("./Assignmnet_Two/routes/classRoute");
const subjectRoute = require("./Assignmnet_Three/routes/subjectRoute");
const teacherRoute = require("./Assignmnet_Three/routes/teacherRoute");
const studentAttendanceRoute = require("./Assignmnet_Three/routes/studentAttendanceRoute");
const teacherAttendanceRoute = require("./Assignmnet_Three/routes/teacherAttendanceRoute");
const staffRoleRoute = require("./Assignmnet_Three/routes/staffRoleRoute");
const staffRoute = require("./Assignmnet_Three/routes/staffRoute");
const staffAttendanceRoute = require("./Assignmnet_Three/routes/staffAttendanceRoute");

// use routes
router.use(studentRoute);
router.use(franchiseRoute);
router.use(instituteRoute);
router.use(classRoute);
router.use(subjectRoute);
router.use(teacherRoute);
router.use(studentAttendanceRoute);
router.use(teacherAttendanceRoute);
router.use(staffRoleRoute);
router.use(staffRoute);
router.use(staffAttendanceRoute);

// Export file
module.exports = router;
