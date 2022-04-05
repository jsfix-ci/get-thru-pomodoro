import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/themeContext";
import "./navbar.css";
const Navbar = () => {
  const {theme, themeToggle} = useTheme();
  return (
    <>
      <div className="nav-align">
        <Link to="/">
          <h1 className="line-height-extra">
            <i class="fa-solid fa-clipboard-check"></i> GetThru
          </h1>
        </Link>
        <div className="btn-toggle">
          <a className="btn-com btn-primary-solid">
            <i class="fa-brands fa-github"></i> GitHub
          </a>

          <button
            class="btn-com btn-icon-singular"
            onClick={themeToggle}
          >
            <span className="btn-icon">
              {theme === 'light' ? (
                <i class="fa-solid fa-moon"></i>
              ) : (
                <i class="fa-solid fa-sun"></i>
              )}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export { Navbar };
