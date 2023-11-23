import React, { useState, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

function Profile() {
  const { username } = useContext(LoginContext);

  return (
    <div>
      Profile
      <p>Hello, {username}</p>
    </div>
  );
}

export default Profile;
