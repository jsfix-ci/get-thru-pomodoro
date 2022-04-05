import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="nav-align">
        <h1 className="line-height-extra">
          <i class="fa-solid fa-clipboard-check"></i> GetThru
        </h1>
        <div className="btn-toggle">
          <a className="btn-com btn-primary-solid">
            <i class="fa-brands fa-github"></i> GitHub
          </a>

          <button
            class="btn-com btn-icon-singular"
            onClick={() => setToggle((toggle) => !toggle)}
          >
            <span className="btn-icon">
              {!toggle ? (
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
