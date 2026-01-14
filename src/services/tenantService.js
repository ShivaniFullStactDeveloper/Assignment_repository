const tenantModel = require('../models/tenantModel');

const addTenant = async (data) => {
  const { tenant_kind, name, status } = data;

  if (!tenant_kind || !name) {
    const error = new Error('tenant_kind and name are required');
    error.statusCode = 400;
    throw error;
  }

  return await tenantModel.createTenant(
    tenant_kind,
    name,
    status
  );
};

const fetchTenants = async () => {
  return await tenantModel.getAllTenants();
};

module.exports = {
  addTenant,
  fetchTenants
};
