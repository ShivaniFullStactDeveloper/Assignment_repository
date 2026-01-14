const express = require('express');
const router = express.Router();

const tenantController = require('../controllers/tenantController');

router.post('/tenant', tenantController.createTenant);
router.get('/tenants', tenantController.getTenants);

module.exports = router;
