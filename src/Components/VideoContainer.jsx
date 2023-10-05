import { useSelector } from "react-redux";
import useVideo from "../hooks/useVideo";
function VideoContainer({ movieId }) {
  const trailer = useSelector((store) => store.movies?.trailer);
  useVideo(movieId);

  return (
    <div className="w-full ">
      <iframe className="w-full aspect-video scrollContainer"
        src={`https://www.youtube.com/embed/${trailer?.key}?XhAHWWFd86SH70oC&autoplay=1&mute=1&controls=0`}
        title={trailer?.name}

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
      
      ></iframe>
    </div>
  );
}

export default VideoContainer;
