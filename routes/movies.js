const express = require("express");
const schemas = require("../utils/schemas/movie");
const MoviesService = require("../services/movies");
const validation = require("../utils/middlewares/validation");
const scopesValidation = require("../utils/middlewares/scopes");
const passport = require("passport"); //

// JSON Web Token strategy
require("../utils/auth/strategies/jwt");

function MoviesAPI(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  const moviesService = new MoviesService();

  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    scopesValidation(["read:movies"]),
    async (req, res, next) => {
      const { tags } = req.query;

      try {
        const movies = await moviesService.getMovies({ tags });

        res.status(200).json({
          data: movies,
          message: "movies listed",
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    "/:movieId",
    passport.authenticate("jwt", { session: false }),
    scopesValidation(["read:movies"]),
    validation(schemas.MovieSchemaId, "params"),
    async (req, res, next) => {
      const { movieId } = req.params;

      try {
        const movie = await moviesService.getMovie({ id: movieId });

        res.status(200).json({
          data: movie,
          message: "movie retrieved",
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    scopesValidation(["create:movies"]),
    validation(schemas.createMovieSchema),
    async (req, res, next) => {
      try {
        const movieCreated = await moviesService.createMovie({
          movie: req.body,
        });

        res.status(201).json({
          data: movieCreated,
          message: "movie created",
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.put(
    "/:movieId",
    passport.authenticate("jwt", { session: false }),
    scopesValidation(["update:movies"]),
    validation(schemas.MovieSchemaId, "params"),
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
          message: "movie updated",
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    "/:movieId",
    passport.authenticate("jwt", { session: false }),
    scopesValidation(["deleted:movies"]),
    validation(schemas.MovieSchemaId, "params"),
    async (req, res, next) => {
      const { movieId } = req.params;

      try {
        const movieRemoved = await moviesService.deleteMovie({ id: movieId });

        res.status(200).json({
          data: movieRemoved,
          message: "movie deleted",
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = MoviesAPI;
