import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
export const Navbar = () => {
  const [user, loading, error] = useAuthState(auth); //Updates acc to current user
  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="Nav">
      <div className="links">
        <Link to="/">Main</Link>
        <Link to="/login">Login</Link>
      </div>
      {user && (
        <div className="user-info">
          <p>{user?.displayName}</p>
          <img src={user?.photoURL || ""} />
          <button className="signout-button" onClick={signUserOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};
