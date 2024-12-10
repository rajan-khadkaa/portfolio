import "./Home.css";
import {
  Github01Icon,
  GithubIcon,
  Linkedin01Icon,
  Linkedin02Icon,
  WhatsappIcon,
  LinerIcon,
  ArrowDown02Icon,
  ArrowDown04Icon,
} from "hugeicons-react";
import profImage from "../../assets/profile.png";

function Home(modeStatus) {
  console.log("mode in home is", modeStatus);
  return (
    <section id="home" className="home-section">
      <div className="home-whole-container">
        <div className="home-icons">
          <a href="www.linkedin.com" target="_blank">
            <Linkedin02Icon size={20} color={"#3c6e71"} variant={"stroke"} />
          </a>
          {/* <GithubIcon size={18} color={"#3c6e71"} variant={"stroke"} /> */}
          <a href="www.github.com" target="_blank">
            <Github01Icon size={20} color={"#3c6e71"} variant={"stroke"} />
          </a>
          <a href="www.whatsapp.com" target="_blank">
            <WhatsappIcon size={20} color={"#3c6e71"} variant={"stroke"} />
          </a>
          <LinerIcon
            style={{ transform: "rotate(-50deg)" }}
            size={20}
            color={"#3c6e71"}
            variant={"stroke"}
          />
        </div>
        <div className="home-div">
          <div className="top-info">
            <p>Hello I am</p>
            <h2>Rajan Khadka</h2>
            <p>Frontend Developer</p>
          </div>
          <div className="home-buttons">
            <button className="home-btn-download">Download CV</button>
            <button className="home-btn-contact">Contact Me</button>
          </div>
          <div className="img-div">
            <img
              className="img-profile"
              // src="../../assets/profile-2.jpg"
              src={profImage}
              alt="Image"
            />
          </div>
        </div>
        <div className="side-info">
          <span>Scroll Down</span>
          <ArrowDown02Icon
            className="down-arrow"
            // style={{ transform: "rotate(-50deg)" }}
            size={20}
            color={"#3c6e71"}
            variant={"stroke"}
          />
        </div>
      </div>
    </section>
  );
}
export default Home;
