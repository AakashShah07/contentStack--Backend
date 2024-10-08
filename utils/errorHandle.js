// Centralized error handler for consistent error responses
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error });
  };
  
  module.exports = { handleError };
  