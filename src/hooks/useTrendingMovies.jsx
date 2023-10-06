import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const moviesData = await movies.json();
    dispatch(addTrendingMovies(moviesData.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};
export default useTrendingMovies;
