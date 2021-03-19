import { readMovies } from "./db.js";

const resolvers = {
  Query: {
    readMovies: (_, { rating, limit }) => readMovies(rating, limit),
  },
};

export default resolvers;
