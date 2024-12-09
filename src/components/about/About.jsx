import "./About.css";
import {
  Mortarboard01Icon,
  LaptopProgrammingIcon,
  AiProgrammingIcon,
} from "hugeicons-react";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-info-container">
          <div className="about-titles">
            <p>Get to know me</p>
            <h2>My Story</h2>
          </div>
          <p>
            I am an eager learner seeking an internship to grow as a frontend
            developer. I quickly adapt to new technologies and aim to improve my
            skills. Learning from professionals and contributing to real
            projects excites me, and I'm ready to take on challenges to grow in
            this field.
          </p>
        </div>
        <div className="about-boxes-container">
          <div className="about-edu-boxes">
            <Mortarboard01Icon
              size={20}
              // color={"#fcfcfc"}
              variant={"stroke"}
            />
            <div>
              <h3>Education</h3>
              <p>Bachelor in Computer Application (BCA)</p>
              <p>Currently on 4th year</p>
            </div>
          </div>
          <div className="about-dom-boxes">
            {/* <LaptopProgrammingIcon */}
            {/* <SoftwareLicenseIcon*/}
            <AiProgrammingIcon
              size={20}
              // color={"#fcfcfc"}
              variant={"stroke"}
            />
            <div>
              <h3>Domain</h3>
              <p>Website Development</p>
              <p>Web App Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
