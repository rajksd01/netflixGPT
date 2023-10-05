import Moviecard from "./Moviecard";
import "../App.css";

function MovieList({ title, movies }) {
  
  return (
    <div className="p-6">
      <h1 className="text-3xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-auto scrollContainer">
        <div className="flex  ">
          {movies?.map((movie) => {
            return (
              <Moviecard key={movie?.id} posterPath={movie?.poster_path} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
