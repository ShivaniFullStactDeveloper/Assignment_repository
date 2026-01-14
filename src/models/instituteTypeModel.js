const pool = require('../config/database');

// post
const createInstituteType = async (type_key, display_name) => {
  const query = `
    INSERT INTO institute_type_master (type_key, display_name)
    VALUES ($1, $2)
    RETURNING *
  `;
  const values = [type_key, display_name];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// get
const getAllInstituteTypes = async () => {
  const query = `SELECT * FROM institute_type_master ORDER BY id`;
  const result = await pool.query(query);
  return result.rows;
};

module.exports = {
  createInstituteType,
  getAllInstituteTypes
};
