import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );

    const movieData = await movies.json();
    console.log(movieData.results);
    dispatch(addUpcomingMovies(movieData.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
