const express = require("express");
const UserMovieService = require("../services/userMovies");
const validation = require("../utils/middlewares/validation");

const { MovieSchemaId } = require("../utils/schemas/movie");
const { userIdSchema } = require("../utils/schemas/user");
const { createUserMovieSchema } = require("../utils/schemas/userMovies");

function UserMoviesAPI(app) {
  const router = express.Router();
  app.use("/api/user-movies", router);

  const userMoviesService = new UserMovieService();

  router.get("/", validation(userIdSchema, "query"), async (req, res, next) => {
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
  });

  router.post('/', validation(createUserMovieSchema), async (req, res, next) => {
      const userMovie = req.body;
    
      try {
        const createdUserMovieId = await userMoviesService.createUserMovie({ userMovie });

        res.status(201).json({
            data: createdUserMovieId,
            message: 'user movie created'
        })
      } catch(e) {
          next(e)
      }
    
  });

  router.delete('/:movieId', validation(MovieSchemaId, 'params'), async (req, res, next) => {
      const { movieId } = req.params;

      try {
        const deletedMovieId = await userMoviesService.deleteUserMovie({ movieId });

        res.status(200).json({
            data: deletedMovieId,
            message: 'user movie deleted'
        })
      } catch(e) {
          next(e);
      }
  })
}

module.exports = UserMoviesAPI;