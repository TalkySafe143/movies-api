const Joi = require('joi');

const { MovieSchemaId } = require('./movie');
const { userIdSchema } = require('./user');

const userMovieIdSchema = Joi.object({
    userMovieId: Joi.string().regex(/^[0-9a-fA-F]{24}$/)
});

const createUserMovieSchema = Joi.object({
    userId: userIdSchema,
    movieId: MovieSchemaId
});

module.exports = { userMovieIdSchema, createUserMovieSchema };