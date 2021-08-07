const Joi = require('joi');

const userIdSchema = Joi.object({
    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/)
});

const createUserSchema = Joi.object({
    name: Joi.string().max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    isAdmin: Joi.boolean()
});

const createUserProviderSchema = Joi.object({ //
    name: Joi.string().max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    isAdmin: Joi.boolean(),
    apiKeyToken: Joi.string().required()
})

module.exports = { userIdSchema, createUserSchema, createUserProviderSchema }