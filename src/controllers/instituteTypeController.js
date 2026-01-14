const instituteTypeService = require('../services/instituteTypeService');

const createInstituteType = async (req, res, next) => {
  try {
    const result = await instituteTypeService.addInstituteType(req.body);
    res.status(201).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const getInstituteTypes = async (req, res, next) => {
  try {
    const result = await instituteTypeService.fetchInstituteTypes();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createInstituteType,
  getInstituteTypes
};
