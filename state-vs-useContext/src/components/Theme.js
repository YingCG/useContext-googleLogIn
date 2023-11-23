import React from "react";
import { useState, createContext } from "react";

export const ThemeContext = createContext();

function Theme() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((theme) => !theme);
  }

  const themeStyles = {
    backgroundColor: darkTheme ? "#557C55" : "#F2FFE9",
    color: darkTheme ? "#F2FFE9" : "#557C55",
  };
  return (
    <div className="App" style={themeStyles}>
      <h1>Home With useContext</h1>
      <button onClick={toggleTheme}>Bright | Dark</button>
    </div>
  );
}

export default Theme;
