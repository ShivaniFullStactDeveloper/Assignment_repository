const express = require('express');
const router = express.Router();

const instituteTypeRoutes = require('../routes/instituteTypeRoute');
const tenantRoutes = require('../routes/tenantRoute');

router.use(instituteTypeRoutes);
router.use(tenantRoutes);

module.exports = router;

