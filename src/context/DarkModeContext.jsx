import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

export const useDarkMode = () => useContext(DarkModeContext);
