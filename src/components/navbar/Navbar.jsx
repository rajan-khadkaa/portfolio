import { useState } from "react";
//https://www.npmjs.com/package/hugeicons-react#usage-examples
import {
  Home01Icon,
  UserIcon,
  ToolsIcon,
  ComputerProgramming01Icon,
  CodeFolderIcon,
  Contact02Icon,
} from "hugeicons-react";

//https://www.npmjs.com/package/react-toggle
import Toggle from "react-toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar({ setModeStatus }) {
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(false); // State for light/dark mode

  function handleActiveMenu(menu) {
    setActive(menu);
  }

  function handleMode(boolean_val) {
    setDarkMode(boolean_val);
    setModeStatus(boolean_val);
    if (boolean_val) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }

  return (
    <nav className="navbar-itself">
      <div className="navbar">
        <div className="nested-nav-div">
          <div>
            <Link
              to="home"
              smooth={true}
              duration={600}
              className={`nav-btn ${active === "home" ? "active" : ""}`}
              onClick={() => handleActiveMenu("home")}
            >
              <Home01Icon
                size={22}
                // color={"#fcfcfc"}
                variant={"stroke"}
              />
            </Link>
          </div>
          <div>
            <Link
              to="story"
              smooth={true}
              duration={600}
              className={`nav-btn ${active === "story" ? "active" : ""}`}
              onClick={() => handleActiveMenu("story")}
            >
              <UserIcon
                size={22}
                // color={"#fcfcfc"}
                variant={"stroke"}
              />
            </Link>
          </div>
          <div>
            <Link
              to="expertise"
              smooth={true}
              duration={600}
              className={`nav-btn ${active === "expertise" ? "active" : ""}`}
              onClick={() => handleActiveMenu("expertise")}
            >
              <ComputerProgramming01Icon
                size={22}
                // color={"#fcfcfc"}
                variant={"stroke"}
              />
            </Link>
          </div>
          <div>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              className={`nav-btn ${active === "projects" ? "active" : ""}`}
              onClick={() => handleActiveMenu("projects")}
            >
              <CodeFolderIcon
                size={22}
                // color={"#fcfcfc"}
                variant={"stroke"}
              />
            </Link>
          </div>
          <div>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              className={`nav-btn ${active === "contact" ? "active" : ""}`}
              onClick={() => handleActiveMenu("contact")}
            >
              <Contact02Icon
                size={22}
                // color={"#fcfcfc"}
                variant={"stroke"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="btns-toggle">
        <button
          className={` btn-toggle ${!darkMode ? "light-active" : ""}`}
          onClick={() => handleMode(false)}
        >
          ☀️
        </button>
        <button
          className={` btn-toggle ${darkMode ? "dark-active" : ""}`}
          onClick={() => handleMode(true)}
        >
          🌙
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
