const dotenv = require('dotenv').config();

// Required ENV  variable list
const requiredEnv = [
    "PORT",
    "DB_USER",
    "DB_HOST",
    "DB_NAME",
    "DB_PASSWORD",
    "DB_PORT",
]

// Validation check
requiredEnv.forEach((key)=>{
    if(!process.env[key]){
        console.error(`Missing environment variable: ${key}`);
        process.exit(1);   //app stop
    }
});

// Export config
module.exports = {
    port: process.env.PORT,
  
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
  };