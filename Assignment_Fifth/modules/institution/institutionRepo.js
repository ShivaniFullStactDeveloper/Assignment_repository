const db = require('../../config/database');

// Institution
exports.insertInstitution = async (i) => {
  await db.query(
    `
    INSERT INTO institution (
      id, tenant_id, institution_type, name, legal_name,
      grade_range, boarding_flag, status, created_by, created_at
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,now())
    `,
    [
      i.id,
      i.tenant_id,
      i.institution_type,
      i.name,
      i.legal_name,
      i.grade_range,
      i.boarding_flag,
      i.status,
      i.created_by
    ]
  );
};

// DEFAULT MODULES 
exports.insertDefaultModules = async ({ institution_id, institution_type }) => {
  await db.query(
    `
    INSERT INTO module_enablement (institution_id, module_key, is_enabled)
    SELECT
      $1,
      module_key,
      is_required
    FROM module_default_by_type
    WHERE institution_type = $2
    `,
    [institution_id, institution_type]
  );
};

// Modules
exports.getInstitutionModules = async (institutionId) => {
  const { rows } = await db.query(
    `
    SELECT
      mc.module_key,
      mc.name,
      me.is_enabled
    FROM module_enablement me
    JOIN module_catalog mc ON mc.module_key = me.module_key
    WHERE me.institution_id = $1
    ORDER BY mc.module_key
    `,
    [institutionId]
  );
  return rows;
};


// Get Institution by ID
exports.getById = async (institutionId) => {
  const { rows } = await db.query(
    `SELECT * FROM institution WHERE id = $1`,
    [institutionId]
  );

  return rows[0]; // undefined if not found
};
