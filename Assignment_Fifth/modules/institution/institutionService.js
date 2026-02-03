const repo = require('./institutionRepo');
const { randomUUID } = require('crypto');

exports.createInstitution = async (payload) => {
  const {
    tenant_id,
    institution_type,
    name,
    legal_name,
    grade_range,
    boarding_flag,
    created_by
  } = payload;

  if (!tenant_id || !institution_type || !name) {
    throw new Error('Missing required fields');
  }

  const institutionId = randomUUID();

  // Create institution
  await repo.insertInstitution({
    id: institutionId,
    tenant_id,
    institution_type,
    name,
    legal_name,
    grade_range,
    boarding_flag,
    status: 'active',
    created_by
  });

  // Enable default modules
  await repo.insertDefaultModules({
    institution_id: institutionId,
    institution_type
  });

  return {
    institution_id: institutionId
  };
};

// Modules
exports.getModules = async (institutionId) => {
  return await repo.getInstitutionModules(institutionId);
};

// onboarding session
const onboardingRepo = require('../onboarding/onboardingRepo');

exports.createInstitution = async (payload) => {
  const institution = await repo.createInstitution(payload);

  // CREATE onboarding session for institution
  await onboardingRepo.createInstitutionOnboardingSession(
    institution.id,
    institution.tenant_id
  );

  return institution;
};



