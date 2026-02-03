const institutionService = require('./institutionService');

// UUID validator (no uuid lib)
const isUUID = (v) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);

// Reate Institution
exports.createInstitution = async (req, res) => {
  try {
    const data = await institutionService.createInstitution(req.body);
    res.status(201).json({ success: true, data });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};

// Fetch institution
exports.getInstitutionModules = async (req, res) => {
  const { institutionId } = req.params;

  if (!isUUID(institutionId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid institution_id'
    });
  }

  const data = await institutionService.getModules(institutionId);
  res.json({ success: true, data });
};
