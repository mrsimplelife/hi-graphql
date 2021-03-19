import axios from "axios";

const API_URL = "https://yts.am/api/v2";
axios.defaults.baseURL = API_URL;

export const readMovies = async (minimum_rating, limit) => {
  console.log(limit, minimum_rating);
  const { data } = await axios.get("list_movies.json", {
    params: {
      limit,
      minimum_rating,
    },
  });
  return data.data.movies;
};
