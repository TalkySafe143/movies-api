const boom = require('@hapi/boom');

const validate = (data, schema) => {
  const { error } = schema.validate(data);
  return error;
};

const validationHandler = (schema, check = 'body') => {
  return (req, res, next) => {
    const validationError = validate(req[check], schema);

    validationError ? next(boom.badRequest(validationError)) : next();
  };
};

module.exports = validationHandler;