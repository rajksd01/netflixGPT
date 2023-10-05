import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-[22%] px-20 w-screen aspect-video absolute bg-gradient-to-r from-black  ">
      <h1 className="font-bold text-white text-6xl">{title}</h1>
      <p className="py-6 w-3/5 text-white ">{overview}</p>
      <div className="flex">
        <button className="p-2 bg-white rounded-md font-bold text-black px-12">
          {" "}
          <div className="flex m-1">
            <FaPlay className="m-1" /> Play
          </div>
        </button>

        <button className="p-3  mx-4 bg-gray-500 rounded-md font-bold text-white px-10">
          <div className="flex">
          <FiInfo className="mt-1 mr-2" /> More Info{" "}
          </div>
          
        
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
