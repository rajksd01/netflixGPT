export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTljNjI4NjBiZDI3OTc1NzRkZTE1ZTk5YTk4YjhmYSIsInN1YiI6IjY1MWIwZGFiOTY3Y2M3MzQyN2YxZTY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AFSroyn7ZBWP4eH2ovtHZ8CATt6XPgIIQqeryXk6pmo",
  },
};

export const nowPlayingMovies_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const VIDEO = `https://api.themoviedb.org/3/movie/{movie_id}/videos`;

export const IMAGECDN = "https://image.tmdb.org/t/p/w200";
