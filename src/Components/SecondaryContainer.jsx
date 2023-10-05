import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className=" bg-black">
      <div className=" -mt-60  p-1 relative z-15">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular "} movies={movies?.popularMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
