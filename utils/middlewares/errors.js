const config = require('../../config');
const boom = require('@hapi/boom');

const withErrorStack = (err, stack) =>
  config.dev ? { ...err, stack } : { err };

const logErrors = (err, req, res, next) => {
  console.log(err);
  next(err);
};

const wrapError = (err, req, res, next) =>
  err.isBoom ? next(err) : next(boom.badImplementation(err));

const errorHandler = (err, req, res, next) => {
  const { output: { statusCode, payload } } = err;

  res.status(statusCode || 500);
  res.json(withErrorStack(payload, err.stack));
};

module.exports = { logErrors, errorHandler, wrapError };
