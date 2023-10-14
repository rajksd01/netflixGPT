import { useSelector } from "react-redux";
import LANG from "../utils/LanguageConstants";
import { useRef } from "react";
import openai from "../utils/openai";

function GPTSearchBar() {
  const searchText = useRef(null);
  const language = useSelector((store) => store.config.lang);
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const onButtonClick = async () => {
    const GPTquery =
      "Act as a movie recommendation system and give some best movies for the query:" +
      searchText.current.value +
      ". Give me only 5 movies ,comma separated like the example result given ahead.Example Result: Gadar2, Sholay, Raaj, The Eliminator, Intestellar";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPTquery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <>
      <div className="pt-[12%] flex justify-center relative">
        <form
          className="w-1/2  p-3 bg-black text-black grid grid-cols-12 rounded-lg   "
          onSubmit={handleFormSubmit}
        >
          <input
            ref={searchText}
            type="text"
            className=" col-span-9  px-5  rounded-lg"
            placeholder={LANG[language].gptSearchPlaceholder}
          />
          <button
            className="bg-red-600 mx-3 py-2  rounded-lg col-span-3 text-2xl "
            onClick={onButtonClick}
          >
            {" "}
            {LANG[language].search}
          </button>
        </form>
      </div>
    </>
  );
}

export default GPTSearchBar;
