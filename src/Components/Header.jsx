import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearch } from "../utils/gptSlice";

import { SUPPORTED_LANGUAGES } from "../utils/Constants";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // for storing user data and tracking user  and navigate the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubsribes when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  // to handle search clicked
  const handleSearchClicked = () => {
    dispatch(toggleGPTSearch());
  };
  // handling language change
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showSearch = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className=" w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {/* after signed in logic */}

      {user && (
        <div className="flex flex-wrap p-4 m-2">
          {showSearch && (
            <div>
              <select
                className="py-4 px-4 rounded-lg mt-1"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((language) => {
                  return (
                    <option
                      key={language.identifier}
                      value={language.identifier}
                    >
                      {" "}
                      {language.name}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          <button
            className="bg-orange-500 font-bold text-xl px-6 py-2 rounded-xl  mx-4 "
            onClick={handleSearchClicked}
          >
            {showSearch ? "HomePage" : "GPT Search"} 
          </button>
          <img
            className="h-12 w-12 px-1 "
            src="../../public/profile.png"
            alt="userIcon"
          />
          <button
            className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border  rounded-lg shadow-inner group "
            onClick={handleSignOut}
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Sign Out
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
