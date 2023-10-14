export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const nowPlayingMovies_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const VIDEO = `https://api.themoviedb.org/3/movie/{movie_id}/videos`;

export const IMAGECDN = "https://image.tmdb.org/t/p/w200";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "nepali", name: "Nepali" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
