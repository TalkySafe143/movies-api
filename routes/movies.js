const express = require('express');
const schemas = require('../utils/schemas/movie');
const MoviesService = require('../services/movies');
const validation = require('../utils/middlewares/validation');

function MoviesAPI(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async (req, res, next) => {
    const { tags } = req.query;

    try {
      const movies = await moviesService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:movieId',
    validation(schemas.MovieSchemaId, 'params'),
    async (req, res, next) => {
      const { movieId } = req.params;

      try {
        const movie = await moviesService.getMovie({ id: movieId });

        res.status(200).json({
          data: movie,
          message: 'movie retrieved',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    validation(schemas.createMovieSchema),
    async (req, res, next) => {
      try {
        const movieCreated = await moviesService.createMovie({
          movie: req.body,
        });

        res.status(201).json({
          data: movieCreated,
          message: 'movie created',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.put(
    '/:movieId',
    validation(schemas.MovieSchemaId, 'params'),
    validation(schemas.updateMovieSchema),
    async (req, res, next) => {
      const { movieId } = req.params;

      try {
        const movieUpdated = await moviesService.updateMovie({
          id: movieId,
          movie: req.body,
        });

        res.status(200).json({
          data: movieUpdated,
          message: 'movie updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:movieId',
    validation(schemas.MovieSchemaId, 'params'),
    async (req, res, next) => {
      const { movieId } = req.params;

      try {
        const movieRemoved = await moviesService.deleteMovie({ id: movieId });

        res.status(200).json({
          data: movieRemoved,
          message: 'movie deleted',
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = MoviesAPI;
