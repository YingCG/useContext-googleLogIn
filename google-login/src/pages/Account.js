import React from "react";
import { UserAuth } from "../context/AuthContext";

function Account() {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Hello, {user?.displayName}</h3>
      <button onClick={handleSignOut}>Log out</button>
    </div>
  );
}

export default Account;
