import React from "react";
import { useGlobalContext } from "../context";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
      </button>
    </section>
  );
};

export default ThemeToggle;
