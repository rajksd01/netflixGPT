import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/UsePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  const showSearch = useSelector((store) => store.gpt.showGPTSearch);
  return (
    <div>
      <Header />
      {showSearch ? (
        <GPTSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
