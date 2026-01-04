// const express = require("express");
// const app = express();

// // middleware
// app.use(express.json());

// // import all routes from one file
// const allRoutes = require("./scr/routeManager");

// // use routes
// app.use(allRoutes);

// // default route
// app.get("/", (req, res) => {
//   res.send("Server is running");
// });

// // server listen
// app.listen(3010, () => {
//   console.log("Server running on port 3100");
// });
 

const express = require("express");
const app = express();

// middleware to read JSON body
app.use(express.json());

// import routes
const studentRoute = require("./scr/routes/studentRoute");
const franchiseRoute = require("./scr/routes/franchiseRoute");
const instituteRoute = require("./scr/routes/instituteRoute");
const classRoute = require("./scr/routes/classRoute");
const subjectRoute = require("./scr/routes/subjectRoute");
const teacherRoute = require("./scr/routes/teacherRoute");
const studentAttendanceRoute = require("./scr/routes/studentAttendanceRoute");
const teacherAttendanceRoute = require("./scr/routes/teacherAttendanceRoute");
const staffRoleRoute = require("./scr/routes/staffRoleRoute");
const staffRoute = require("./scr/routes/staffRoute");
const staffAttendanceRoute = require("./scr/routes/staffAttendanceRoute");

// use routes
app.use(studentRoute);
app.use(franchiseRoute)
app.use(instituteRoute);
app.use(classRoute);
app.use(subjectRoute);
app.use(teacherRoute);
app.use(studentAttendanceRoute);
app.use(teacherAttendanceRoute);
app.use(staffRoleRoute);
app.use(staffRoute);
app.use(staffAttendanceRoute);

// default route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// server listen
app.listen(3011, () => {
  console.log("Server running on port 3800");
});
