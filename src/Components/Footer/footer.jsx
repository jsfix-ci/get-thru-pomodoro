import { useTheme } from "../../Context/themeContext";

const Footer = () => {
  const {theme} = useTheme();
    return (
      <>
        <div className="footer-basic" style={{ backgroundColor: theme === 'light' ? "#b3cccc" : '#669999', padding:'2rem'}}>
          <footer>
            <p className="signature">
              {" "}
              Made with <i className="fas fa-code"></i> by Rohan Dubey{" "}
            </p>
            <div className="social">
              <a href="https://github.com/Rohan-154/Villainess-Component-Library-V-N">
                {" "}
                <i className="fab fa-github fa-lg"></i>{" "}
              </a>
              <a href="https://twitter.com/Rohan_415?s=09">
                {" "}
                <i className="fab fa-twitter fa-lg"></i>{" "}
              </a>
              <a href="https://www.linkedin.com/in/rohan-dubey-2854b9201/">
                {" "}
                <i className="fab fa-linkedin fa-lg"></i>{" "}
              </a>
              <p className="copyright">GetThru © 2022 </p>
            </div>
            <script src="/Docsite-JS/components.js"></script>
          </footer>
        </div>
      </>
    );
  };
  
  export { Footer };
  