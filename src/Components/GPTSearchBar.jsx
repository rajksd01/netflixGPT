function GPTSearchBar() {
  return (
    <>
      <div className="pt-[10%] flex justify-center relative">
        <form className="w-1/2  p-5 bg-black text-white grid grid-cols-12 rounded-lg  ">
          <input
            type="text"
            className=" col-span-9  px-5 rounded-lg"
            placeholder="What would you like to watch today?"
          />
          <button className="bg-red-600 m-4 py-3 rounded-lg col-span-2 ">
            {" "}
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default GPTSearchBar;
