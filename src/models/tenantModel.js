const pool = require('../config/database');

const createTenant = async (tenant_kind, name, status) => {
  const query = `
    INSERT INTO tenant (tenant_kind, name, status)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const values = [tenant_kind, name, status || 'ACTIVE'];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getAllTenants = async () => {
  const query = `SELECT * FROM tenant ORDER BY created_at DESC`;
  const result = await pool.query(query);
  return result.rows;
};

module.exports = {
  createTenant,
  getAllTenants
};
