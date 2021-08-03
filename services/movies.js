const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };

    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ id }) {
    const movie = await this.mongoDB.get(this.collection, id);
    return movie || [];
  }

  async createMovie({ movie }) {
    const movieCreated = await this.mongoDB.create(this.collection, movie);
    return movieCreated || [];
  }

  async updateMovie({ id, movie }) {
    const movieUpdated = await this.mongoDB.update(this.collection, id, movie);
    return movieUpdated || [];
  }

  async deleteMovie({ id }) {
    const movieDeleted = await this.mongoDB.delete(this.collection, id);
    return movieDeleted || [];
  }
}

module.exports = MoviesService;