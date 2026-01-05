// Import Pool from pg package
const { Pool } = require("pg");
// Create database connection
const database = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydatabase",
  password: "postgres", 
  port: 5432,
});

// Check database connection
database.connect((err) => {
    if (err) {
      console.log("Database not connected");
    } else {
      console.log("Database connected");
    }
});

module.exports = database;