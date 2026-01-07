//  ID validation
const validateFranchiseId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id || isNaN(id) || Number(id) <= 0) {
      return res.status(400).json({
        error: "Invalid Franchise id"
      });
    }
  
    next();
  };
  
  // Request body validation (next is a middleware)
  const validateFranchise = (req, res, next) => {
    const {
      franchise_name,
    } = req.body;
  
    if (!franchise_name) {
      return res.status(400).json({ error: "franchise_name is required" });
    }
  
    next(); // All are valid
  };
  
  module.exports = {
    validateFranchiseId,
    validateFranchise
  };
  