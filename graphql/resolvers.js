import { createMovie, readMovies, readMovie, deleteMovie } from "./db.js";

const resolvers = {
  Query: {
    readMovies: () => readMovies(),
    readMovie: (_, { id }) => readMovie(id),
  },
  Mutation: {
    createMovie: (_, { name, score }) => createMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
