import { readMovies, readMovie } from "./db.js";

const resolvers = {
  Query: {
    readMovies: (_, { rating, limit }) => readMovies(rating, limit),
    readMovie: (_, { id }) => readMovie(id),
  },
};

export default resolvers;
