import React from "react";
import "./Project.css";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/proj3.jpg";
import {
  Github01Icon,
  GithubIcon,
  // CircleArrowUpRight02Icon,
  CircleArrowUpRightIcon,
  ArrowUpRight01Icon,
} from "hugeicons-react";
import { Link } from "react-scroll";

function Project() {
  return (
    <section id="projects" className="project-section">
      <div className="project-whole-container">
        <div className="project-titles">
          <p>What I have been working on</p>
          <h2>Recent Projects</h2>
        </div>
        <div className="project-card">
          <div className="project-container">
            <img src={project1} alt="image 1" />
            <div>
              <h3>Rock Paper Chimp</h3>
              <p>React JS</p>
            </div>
            <div className="project-btns">
              <button
                className="demo-btn"
                onClick={() =>
                  window.open("https://github.com/rajan-khadkaa", "_blank")
                }
              >
                Demo
                <CircleArrowUpRightIcon size={17} variant={"stroke"} />
              </button>
              <Link
                className="github-btn"
                to="https://github.com/rajan-khadkaa"
              >
                <Github01Icon size={20} variant={"stroke"} />
              </Link>
            </div>
          </div>
          <div className="project-container">
            <img src={project2} alt="image 2" />
            <div>
              <h3>To-do-list App</h3>
              <p>React JS</p>
            </div>
            <div className="project-btns">
              <button
                className="demo-btn"
                onClick={() =>
                  window.open("https://github.com/rajan-khadkaa", "_blank")
                }
              >
                Demo
                <CircleArrowUpRightIcon size={17} variant={"stroke"} />
              </button>
              <Link
                className="github-btn"
                to="https://github.com/rajan-khadkaa"
              >
                <Github01Icon size={20} variant={"stroke"} />
              </Link>
            </div>
          </div>
          <div className="project-container">
            <img src={project3} alt="image 3" />
            <div>
              <h3>My Portfolio (Current)</h3>
              <p>React JS</p>
            </div>
            <div className="project-btns">
              <button
                className="demo-btn"
                onClick={() =>
                  window.open("https://github.com/rajan-khadkaa", "_blank")
                }
              >
                Demo
                <CircleArrowUpRightIcon size={17} variant={"stroke"} />
              </button>
              <Link
                className="github-btn"
                to="https://github.com/rajan-khadkaa"
              >
                <Github01Icon size={20} variant={"stroke"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
