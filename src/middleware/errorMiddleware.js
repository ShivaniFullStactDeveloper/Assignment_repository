// const errorMiddleware = (err, req, res, next) => {
//     console.error('ERROR', err);
  
//     // PostgreSQL duplicate key
//     if (err.code === '23505') {
//       return res.status(409).json({
//         success: false,
//         message: 'Duplicate record found',
//       });
//     }
  
//     // Validation / bad request
//     if (err.name === 'ValidationError') {
//       return res.status(400).json({
//         success: false,
//         message: err.message,
//       });
//     }
  
//     // Default fallback
//     res.status(500).json({
//       success: false,
//       message: 'Internal Server Error',
//     });
//   };
  
//   module.exports = errorMiddleware;
  
const errorMiddleware = (err, req, res, next) => {
    console.error(err);
  
    // PostgreSQL unique violation
    if (err.code === '23505') {
      return res.status(409).json({
        success: false,
        message: 'Duplicate record found'
      });
    }
  
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || 'Internal Server Error'
    });
  };
  
  module.exports = errorMiddleware;
  