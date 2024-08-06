import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";

const DarkMode = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDark ? (
        <MdLightMode className="w-7 h-7 cursor-pointer text-text_secondary" />
      ) : (
        <MdDarkMode className="w-7 h-7 cursor-pointer text-text_secondary" />
      )}
    </button>
  );
};

export default DarkMode;
