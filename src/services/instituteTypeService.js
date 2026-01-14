const instituteTypeModel = require('../models/instituteTypeModel');

const addInstituteType = async (data) => {
  const { type_key, display_name } = data;

  if (!type_key || !display_name) {
    const error = new Error('type_key and display_name are required');
    error.statusCode = 400;
    throw error;
  }

  return await instituteTypeModel.createInstituteType(
    type_key,
    display_name
  );
};

const fetchInstituteTypes = async () => {
  return await instituteTypeModel.getAllInstituteTypes();
};

module.exports = {
  addInstituteType,
  fetchInstituteTypes
};
