import { Link } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
export const Navbar = () => {
  const [user, loading, error] = useAuthState(auth); //Updates acc to current user
  const navigate = useNavigate();
  const signUserOut = async () => {
    await signOut(auth);
  };

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div className="Nav">
      <div className="links">
        <Link to="/">Home</Link>
        {user ? (
          <Link to="/createpost">Create Post</Link>
        ) : (
          <button className="login-button" onClick={signInWithGoogle}>Log In</button>
        )}
      </div>
      {user && (
        <div className="user-info">
          <p>{user?.displayName}</p>
          <img src={user?.photoURL || ""} />
          <button className="signout-button" onClick={signUserOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
