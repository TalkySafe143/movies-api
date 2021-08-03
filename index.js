const express = require('express');
const config = require('./config');
const moviesAPIRouter = require('./routes/movies');

const middlewaresErrors = require('./utils/middlewares/errors');

const notFound = require('./utils/middlewares/notFound');

const app = express();

app.use(express.json());

moviesAPIRouter(app);

app.use(notFound);

// errors handlers
app.use(middlewaresErrors.logErrors);
app.use(middlewaresErrors.wrapError);
app.use(middlewaresErrors.errorHandler);

app.listen(config.port, () => {
  console.log(`Listening in port: ${config.port}`);
});
