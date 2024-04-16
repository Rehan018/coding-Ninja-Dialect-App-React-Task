import {useContext} from 'react';
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";


export const Navbar = () => {
  const { theme, setTheme } = useContext(themeContext);
  const { language } = useContext(languageContext);

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "dark theme" : "light theme"}
        </button>
        <span>{language}</span>
      </div>
    </div>
  );
};