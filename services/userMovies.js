const MongoLib = require('../lib/mongo');

class UserMovieService {
    constructor(){
        this.collection = 'user-movies',
        this.mongoDB = new MongoLib();
    }

    async getUserMovies({ userId }) {
        const query = userId && { userId };
        const userMovies = this.mongoDB.getAll(this.collection, query);

        return userMovies || [];
    }

    async createUserMovie({ userMovie }) {
        const createdMovieId = await this.mongoDB.create(this.collection, userMovie);

        return createdMovieId;
    }

    async deleteUserMovie({ movieId }) {
        const deletedMovieId = await this.mongoDB.delete(this.collection, movieId);

        return deletedMovieId;
    }
}

module.exports = UserMovieService;