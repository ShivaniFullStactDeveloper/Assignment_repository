const express = require('express');
const router = express.Router();
const controller = require('./institutionController');

router.post('/', controller.createInstitution);
router.get('/:institutionId/modules',controller.getInstitutionModules);
  
module.exports = router;
