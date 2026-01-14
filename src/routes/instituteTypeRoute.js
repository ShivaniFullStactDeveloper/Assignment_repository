const express = require('express');
const router = express.Router();

const instituteTypeController = require('../controllers/instituteTypeController');

router.post('/create', instituteTypeController.createInstituteType);
router.get('/list', instituteTypeController.getInstituteTypes);

module.exports = router;
