import { readMovies, readMovie, getSuggestions } from "./db.js";

const resolvers = {
  Query: {
    readMovies: (_, { rating, limit }) => readMovies(rating, limit),
    readMovie: (_, { id }) => readMovie(id),
    getSuggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
