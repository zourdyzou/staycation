/* eslint-disable import/no-anonymous-default-export */
// import ErrorBoundary from "../utils/errorBoundary";

export default (err, req, res) => {
  err.statusCode = err.statusCode || 500;

  // prettier-ignore
  let error = { ...err };

  error.message = err.message;

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
