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
            <i className="fa-solid fa-clipboard-check"></i> GetThru
          </h1>
        </Link>
        <div className="btn-toggle">
          <a href='https://github.com/Rohan-154/get-thru-pomodoro' className="btn-com btn-primary-solid">
            <i className="fa-brands fa-github"></i> GitHub
          </a>

          <button
            className="btn-com btn-icon-singular"
            onClick={themeToggle}
          >
            <span className="btn-icon">
              {theme === 'light' ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export { Navbar };
