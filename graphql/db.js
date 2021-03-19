import axios from "axios";

const API_URL = "https://yts.am/api/v2";
axios.defaults.baseURL = API_URL;

export const readMovies = async (minimum_rating, limit) => {
  const { data } = await axios.get("list_movies.json", {
    params: {
      limit,
      minimum_rating,
    },
  });
  return data.data.movies;
};
export const readMovie = async (movie_id) => {
  const { data } = await axios.get("movie_details.json", {
    params: {
      movie_id,
    },
  });
  return data.data.movie;
};

export const getSuggestions = async (movie_id) => {
  const { data } = await axios.get("movie_suggestions.json", {
    params: {
      movie_id,
    },
  });
  return data.data.movies;
};
