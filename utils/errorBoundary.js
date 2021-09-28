class ErrorBoundary extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    // create (dot) stack property => return string
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorBoundary;
