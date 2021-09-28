import ErrorBoundary from "../utils/errorBoundary";

export default (err, req, res) => {
  err.statusCode = err.statusCode || 500;

  // prettier-ignore
  let error = { ...err };

  error.message = err.message;

  //* Wrong Mongoose Object ID
  if (err.name === "CastError") {
    const message = `Resource not found, Invalid: ${err.path}`;

    error = new ErrorBoundary(message, 400);
  }

  //* Handling Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);

    error = new ErrorBoundary(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
