import heroImg from "../../Assets/hero-img.jpg";
import darkHeroImg from "../../Assets/dark-home-img.png";
import ashneerMeme from "../../Assets/ashneer-meme.jpg";
import "../HomeBody/homeBody.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/themeContext";
const Body = () => {
  const {theme} = useTheme();
  return (
    <>
      <div className="wrap-side-content">
        <div className="caption-main">
          <img
            src={ashneerMeme}
            alt="meme"
            className="res-img-hero res-hero-meme"
          />
          <h2>If you don't want your inner self to read above image, </h2>
          <h2>
            Then be <span className="underline"> focused </span>,{" "}
            <span className="underline">map your tasks</span> and adopt
            <span className="underline"> POMODORO technique </span>.
          </h2>
          <h3 className="h3-tags">
            {" "}
            <strong className="underline">GetThru</strong> is a one stop todo or
            pomodoro app to complete you daily tasks and help you to adopt new
            and good habits.{" "}
          </h3>

          <Link to="/todos">
            <button className="btn-com btn-primary-outline">
              {" "}
              Get, Set, Go{" "}
            </button>
          </Link>
        </div>

        <div>
          { theme === 'light' ? <img
            src={heroImg}
            alt="main-head-img"
            className="res-img-hero res-img-main"
          /> : <img
          src={darkHeroImg}
          alt="main-head-img"
          className="res-img-hero res-img-main" />}
          
        </div>
      </div>
    </>
  );
};

export { Body };
