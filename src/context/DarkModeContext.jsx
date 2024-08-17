import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const { state, postLocalStorage } = useLocalStorage(
    "isDarkMode",
    // window.matchMedia("(prefers-color-scheme: dark)").matches
    false
  );
  const [isDark, setIsDark] = useState(state);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  useEffect(() => {
    if (isDark) {
      postLocalStorage(true);
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      postLocalStorage(false);
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
