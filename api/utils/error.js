export const errorHandler = (statusCode, message) => {
  // js constructor 'new'
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
