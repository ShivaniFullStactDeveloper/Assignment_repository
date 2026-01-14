const env = require("./config/env");

console.log(env.port); // 3100

// Import express.js
const express = require("express");
const app = express();

// middleware to read JSON body
app.use(express.json());

// import all routes from one file
const allRoutes = require('./route_manager/index');
const errorMiddleware = require('./middleware/errorMiddleware');

// use routes
app.use(allRoutes);

// Common Error Middleware
app.use(errorMiddleware);

// default route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// server listen
app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});

