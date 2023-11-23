import React, { useEffect, useState } from "react";

function HomePageWithState() {
  const [theme, setTheme] = useState(true);

  function toggleTheme() {
    setTheme((theme) => !theme);
  }

  const themeStyles = {
    backgroundColor: theme ? "#333" : "#FFEBD8",
    color: theme ? "#FFEBD8" : "#333",
  };

  return (
    <div
      className={`App ${theme ? "dark-theme" : "light-theme"}`}
      style={themeStyles}
    >
      <button onClick={toggleTheme}>Change state</button>
      <h1>Simple Update the state</h1>
    </div>
  );
}

export default HomePageWithState;
