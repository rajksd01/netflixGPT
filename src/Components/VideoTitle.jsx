function VideoTitle({ title, overview }) {
  return (
    <div className="pt-[20%] px-24 w-screen aspect-video absolute bg-gradient-to-r from-black  ">
      <h1 className="font-bold text-white text-6xl">{title}</h1>
      <p className="py-6 w-3/5 text-white ">{overview}</p>
      <div>
        <button className="p-2 bg-white rounded-md font-bold text-black px-10">▶ Play</button>
        <button className="p-2 mx-4 bg-gray-500 rounded-md font-bold text-white px-10">ℹ  More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
