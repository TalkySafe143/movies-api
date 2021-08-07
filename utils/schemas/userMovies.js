const Joi = require('joi');


const userMovieIdSchema = Joi.object({
    userMovieId: Joi.string().regex(/^[0-9a-fA-F]{24}$/)
});

const createUserMovieSchema = Joi.object({
    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    movieId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});

module.exports = { userMovieIdSchema, createUserMovieSchema };