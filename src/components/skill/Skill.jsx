import "./Skill.css";
import {
  CheckmarkBadge01Icon,
  LaptopProgrammingIcon,
  AiProgrammingIcon,
} from "hugeicons-react";

function Skill() {
  return (
    <section id="expertise" className="skill-section">
      <div className="skill-titles">
        <p>Skills that define me</p>
        <h2>My Expertise</h2>
      </div>
      <div className="skill-cards">
        <div className="primary-card">
          <h3>Primary Skills</h3>
          <div className="skill-info">
            <div>
              <div className="skill-topic">
                <CheckmarkBadge01Icon
                  size={16}
                  // color={"#fcfcfc"}
                  variant={"stroke"}
                />
                <div>
                  <h4>HTML</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
            <div>
              <div className="skill-topic">
                <CheckmarkBadge01Icon
                  size={16}
                  // color={"#fcfcfc"}
                  variant={"stroke"}
                />
                <div>
                  <h4>CSS</h4>
                  <p>Beginner</p>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-info">
            <div>
              <div className="skill-topic">
                <CheckmarkBadge01Icon
                  size={16}
                  // color={"#fcfcfc"}
                  variant={"stroke"}
                />
                <div>
                  <h4>JavaScript</h4>
                  <p>Beginner</p>
                </div>
              </div>
            </div>
            <div>
              <div className="skill-topic">
                <CheckmarkBadge01Icon
                  size={16}
                  // color={"#fcfcfc"}
                  variant={"stroke"}
                />
                <div>
                  <h4>React JS</h4>
                  <p>Beginner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-card">
          <h3>Additional Skills</h3>
          <div className="skill-info">
            <div>
              <div className="skill-topic">
                <CheckmarkBadge01Icon
                  size={16}
                  // color={"#fcfcfc"}
                  variant={"stroke"}
                />
                <div>
                  <h4>UI/UX</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
            <div>
              <div className="skill-topic">
                <CheckmarkBadge01Icon
                  size={16}
                  // color={"#fcfcfc"}
                  variant={"stroke"}
                />
                <div>
                  <h4>Git & Github</h4>
                  <p>Beginner</p>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-info">
            <div>
              <div className="skill-topic">
                <CheckmarkBadge01Icon
                  size={16}
                  // color={"#fcfcfc"}
                  variant={"stroke"}
                />
                <div>
                  <h4>Graphic Design</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
            <div>
              <div className="skill-topic">
                <CheckmarkBadge01Icon
                  size={16}
                  // color={"#fcfcfc"}
                  variant={"stroke"}
                />
                <div>
                  <h4>Wireframing</h4>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
