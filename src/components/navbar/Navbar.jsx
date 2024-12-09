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
    <nav>
      <div className="navbar">
        <div className="nested-nav-div">
          <div>
            <a
              href="#home"
              className={`nav-btn ${active === "home" ? "active" : ""}`}
              onClick={() => handleActiveMenu("home")}
            >
              <Home01Icon
                size={22}
                // color={"#fcfcfc"}
                variant={"stroke"}
              />
            </a>
          </div>
          <div>
            <a
              href="#story"
              className={`nav-btn ${active === "story" ? "active" : ""}`}
              onClick={() => handleActiveMenu("story")}
            >
              <UserIcon
                size={22}
                // color={"#fcfcfc"}
                variant={"stroke"}
              />
            </a>
          </div>
          <div>
            <a
              href="#expertise"
              className={`nav-btn ${active === "expertise" ? "active" : ""}`}
              onClick={() => handleActiveMenu("expertise")}
            >
              <ComputerProgramming01Icon
                size={22}
                // color={"#fcfcfc"}
                variant={"stroke"}
              />
            </a>
          </div>
          <div>
            <a
              href="#projects"
              className={`nav-btn ${active === "projects" ? "active" : ""}`}
              onClick={() => handleActiveMenu("projects")}
            >
              <CodeFolderIcon
                size={22}
                // color={"#fcfcfc"}
                variant={"stroke"}
              />
            </a>
          </div>
          <div>
            <a
              href="#contact"
              className={`nav-btn ${active === "contact" ? "active" : ""}`}
              onClick={() => handleActiveMenu("contact")}
            >
              <Contact02Icon
                size={22}
                // color={"#fcfcfc"}
                variant={"stroke"}
              />
            </a>
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
