const express = require("express");
const app = express();

// middleware to read JSON body
app.use(express.json());

// import all routes from one file
const allRoutes = require("./scr/route_manager/app");

// use routes
app.use(allRoutes);

// default route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// server listen
app.listen(3300, () => {
  console.log("Server running on port 3800");
});



