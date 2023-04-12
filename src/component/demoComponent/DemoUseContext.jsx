import React, { createContext, useState } from "react";
import CompB from "./CompB";
export const themeContext = createContext();
export default function DemoUseContext() {
  const [theme, setTheme] = useState("light");
  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <themeContext.Provider value={theme}>
        <h2>Demo</h2>
        <button onClick={handleChange}>Change Style</button>
        <CompB />
      </themeContext.Provider>
    </div>
  );
}
