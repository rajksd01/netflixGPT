import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className=" w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {/* after signed in logic */}
    
        
       {user && <div className="flex flex-wrap p-4 m-2">
          <img
            className="h-12 w-12  "
            src="../../public/profile.png"
            alt="userIcon"
          />
          <p>{user?.displayName}</p>
          <button className="text-white bg-red-600" onClick={handleSignOut}>
            {" "}
            Sign Out
          </button>
        </div>}
      
    </div>
  );
}

export default Header;
