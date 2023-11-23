import React, { useContext } from "react";
import Theme, { ThemeContext } from "./Theme";

function HomePageWithContext() {
  const darkTheme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={darkTheme}>
      <Theme />
    </ThemeContext.Provider>
  );
}

export default HomePageWithContext;
