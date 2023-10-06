import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies=async()=>{
  const movies = await fetch(
    " https://api.themoviedb.org/3/movie/popular?page=1",
    API_OPTIONS
  );
  const popular_movies = await movies.json();
 
  dispatch(addPopularMovies(popular_movies.results));}


  useEffect(()=>{
    getPopularMovies()
  },[])
};

export default usePopularMovies;
