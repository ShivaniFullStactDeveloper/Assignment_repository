const tenantService = require('../services/tenantService');

const createTenant = async (req, res, next) => {
  try {
    const tenant = await tenantService.addTenant(req.body);
    res.status(201).json({
      success: true,
      data: tenant
    });
  } catch (error) {
    next(error);
  }
};

const getTenants = async (req, res, next) => {
  try {
    const tenants = await tenantService.fetchTenants();
    res.status(200).json({
      success: true,
      data: tenants
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTenant,
  getTenants
};
