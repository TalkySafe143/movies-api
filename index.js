const express = require('express');
const config = require('./config');
const helmet = require('helmet');

const moviesAPIRouter = require('./routes/movies');
const userMoviesAPI = require('./routes/userMovies');
const authAPI = require('./routes/auth');

const middlewaresErrors = require('./utils/middlewares/errors');

const notFound = require('./utils/middlewares/notFound');

const app = express();

app.use(express.json());
app.use(helmet())

authAPI(app);
moviesAPIRouter(app);
userMoviesAPI(app);

app.use(notFound);

// errors handlers
app.use(middlewaresErrors.logErrors);
app.use(middlewaresErrors.wrapError);
app.use(middlewaresErrors.errorHandler);

app.listen(config.port, () => {
  console.log(`Listening in port: ${config.port}`);
});
