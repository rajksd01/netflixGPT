import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    <div>
      <VideoTitle />
      <VideoContainer />
    </div>
  );
}

export default MainContainer;
