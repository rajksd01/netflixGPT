import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch,  } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useVideo = (movieId) => {
  const dispatch = useDispatch();

  const movieData = async () => {
    const movieVideo = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const video = await movieVideo.json();
    const trailers = video.results.filter((video) => video.type == "Trailer");

    dispatch(addTrailer(trailers[0]));
  };

  useEffect(() => {
    movieData();
  }, []);
};
export default useVideo;
