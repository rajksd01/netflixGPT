import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_URL } from "../utils/Constants";

function GPTSearch() {
  return (
    <div>
      <div className="absolute w-full h-full -z-10   ">
        {" "}
        <img
          className="w-full h-full"
          src={BG_URL}
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
}

export default GPTSearch;
