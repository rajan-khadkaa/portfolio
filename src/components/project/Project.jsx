import React from "react";
import "./Project.css";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";

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
              <h3>Rock Paper Scissor</h3>
              <p>React JS</p>
            </div>
            <div className="project-btns">
              <button className="github-btn">Github</button>
              <button className="demo-btn">Demo</button>
            </div>
          </div>
          <div className="project-container">
            <img src={project2} alt="image 2" />
            <div>
              <h3>Rock Paper Scissor</h3>
              <p>React JS</p>
            </div>
            <div className="project-btns">
              <button className="github-btn">Github</button>
              <button className="demo-btn">Demo</button>
            </div>
          </div>
          <div className="project-container">
            <img src={project3} alt="image 3" />
            <div>
              <h3>Rock Paper Scissor</h3>
              <p>React JS</p>
            </div>
            <div className="project-btns">
              <button className="github-btn">Github</button>
              <button className="demo-btn">Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
