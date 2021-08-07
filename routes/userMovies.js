const express = require("express");
const UserMovieService = require("../services/userMovies");
const validation = require("../utils/middlewares/validation");
const scopeValidation = require("../utils/middlewares/scopes");
const passport = require("passport");

const { MovieSchemaId } = require("../utils/schemas/movie");
const { userIdSchema } = require("../utils/schemas/user");
const { createUserMovieSchema } = require("../utils/schemas/userMovies");

// JSON Web Token strategy
require("../utils/auth/strategies/jwt");

function UserMoviesAPI(app) {
  const router = express.Router();
  app.use("/api/user-movies", router);

  const userMoviesService = new UserMovieService();

  router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    scopeValidation(["read:user-movies"]),
    validation(userIdSchema, "query"),
    async (req, res, next) => {
      const { userId } = req.query;

      try {
        const userMovies = await userMoviesService.getUserMovies({ userId });

        res.status(200).json({
          data: userMovies,
          message: "User movies listed",
        });
      } catch (e) {
        next(e);
      }
    }
  );

  router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    scopeValidation(["create:user-movies"]),
    validation(createUserMovieSchema),
    async (req, res, next) => {
      
      const userMovie = req.body;

      try {
        const createdUserMovieId = await userMoviesService.createUserMovie({
          userMovie,
        });

        res.status(201).json({
          data: createdUserMovieId,
          message: "user movie created",
        });
      } catch (e) {
        next(e);
      }
    }
  );

  router.delete(
    "/:movieId",
    passport.authenticate("jwt", { session: false }),
    scopeValidation(["delete:user-movies"]),
    validation(MovieSchemaId, "params"),
    async (req, res, next) => {
      const { movieId } = req.params;

      try {
        const deletedMovieId = await userMoviesService.deleteUserMovie({
          movieId,
        });

        res.status(200).json({
          data: deletedMovieId,
          message: "user movie deleted",
        });
      } catch (e) {
        next(e);
      }
    }
  );
}

module.exports = UserMoviesAPI;
