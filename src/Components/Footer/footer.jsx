import { useTheme } from "../../Context/themeContext";

const Footer = () => {
  const {theme} = useTheme();
    return (
      <>
        <div class="footer-basic" style={{ backgroundColor: theme === 'light' ? "#b3cccc" : '#669999', padding:'2rem'}}>
          <footer>
            <p class="signature">
              {" "}
              Made with <i class="fas fa-code"></i> by Rohan Dubey{" "}
            </p>
            <div class="social">
              <a href="https://github.com/Rohan-154/Villainess-Component-Library-V-N">
                {" "}
                <i class="fab fa-github fa-lg"></i>{" "}
              </a>
              <a href="https://twitter.com/Rohan_415?s=09">
                {" "}
                <i class="fab fa-twitter fa-lg"></i>{" "}
              </a>
              <a href="https://www.linkedin.com/in/rohan-dubey-2854b9201/">
                {" "}
                <i class="fab fa-linkedin fa-lg"></i>{" "}
              </a>
              <p class="copyright">GetThru © 2022 </p>
            </div>
            <script src="/Docsite-JS/components.js"></script>
          </footer>
        </div>
      </>
    );
  };
  
  export { Footer };
  