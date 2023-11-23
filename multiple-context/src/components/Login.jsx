import React, { useState, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

function Login() {
  //   const [username, setUsername] = useState("");
  //   const [showProfile, setShowProfile] = useState(True);
  const { setUsername, setShowProfile } = useContext(LoginContext);
  // console.log(setShowProfile);

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        // onChange={(event) => {
        //   //   setPassword(event.target.value);
        // }}
      />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Log In
      </button>
      {/* {showProfile && <h1>{username}</h1>} */}
    </div>
  );
}

export default Login;
