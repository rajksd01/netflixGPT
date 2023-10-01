import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  // to validate form
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  // For Switching of Form

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // For handling Sign up/ SignIn
  const handleButtonClick = (e) => {
    e.preventDefault();

    const check = checkValidData(email.current.value, password.current.value);
    setErrorMessage(check);
  };

  return (
    <>
      <Header />
      <div className="absolute w-full h-full  ">
        {" "}
        <img
          className="w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <form className=" text-white  w-4/12 absolute bg-black my-28 p-16 pt-8 mx-auto left-0 right-0 bg-opacity-80">
        <h1 className="text-3xl m-1 my-4 font-bold">
          {isSignInForm ? "SignIn" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4  my-3 m-1 w-full bg-[#333333] rounded-md "
          />
        ) : (
          <></>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4  my-3 m-1 w-full bg-[#333333] rounded-md "
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 m-1 my-3 w-full bg-[#333333] rounded-md"
        />
        <br />
        <button
          className="bg-red-700 p-3 m-1  my-4 rounded-md w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? <h1>Sign In</h1> : <h1>Sign Up</h1>}
        </button>
        <p className="font-bold p-1 py-3 text-red-600">{errorMessage}</p>
        <div>
          {" "}
          <input className="m-1 " type="checkbox" />
          <label> Remember Me</label>
        </div>
        <p className="mt-12 m-1 cursor-pointer " onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up" : "Already a user, Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
//1:57:43
