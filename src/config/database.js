const { Pool } = require("pg");
const env = require("../config/env");

// PostgreSQL connection pool
const pool = new Pool({
  user: env.dbUser,
  host: env.dbHost,
  database: env.dbName,
  password: env.dbPassword,
  port: env.dbPort,
});

// Test connection
pool.connect()
  .then(() => console.log(" Database connected"))
  .catch(err => console.log(" DB error:", err.message));

module.exports = pool;


