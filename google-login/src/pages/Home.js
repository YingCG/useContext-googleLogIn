import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Home() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  );
}

export default Home;
