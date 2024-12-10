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
  ArrowDown03Icon,
  ArrowUpRight01Icon,
  CircleArrowDown03Icon,
} from "hugeicons-react";
import profImage from "../../assets/profile.png";

function Home(modeStatus) {
  console.log("mode in home is", modeStatus);
  return (
    <section id="home" className="home-section">
      <div className="home-whole-container">
        <div className="home-icons">
          <a
            href="https://www.linkedin.com/in/rajan-khadka-106868268/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <Linkedin02Icon size={20} variant={"stroke"} />
          </a>
          {/* <GithubIcon size={18} color={"#3c6e71"} variant={"stroke"} /> */}
          <a href="https://github.com/rajan-khadkaa" target="_blank">
            <Github01Icon size={20} variant={"stroke"} />
          </a>
          <a
            href="https://www.google.com/url?q=https://api.whatsapp.com/qr/EFJ6RUYPO4AGK1?autoload%3D1%26app_absent%3D0&sa=D&source=apps-viewer-frontend&ust=1733922172791685&usg=AOvVaw36Hw3FZ3enl-ug7_rABQtF&hl=en-GB"
            target="_blank"
          >
            <WhatsappIcon size={20} variant={"stroke"} />
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
            <button className="home-btn-download">
              Download CV <ArrowDown03Icon size={16} variant={"stroke"} />
            </button>
            <button
              className="home-btn-contact"
              onClick={() =>
                (window.location.href = "mailto:rajankhadkaa0809@gmail.com")
              }
            >
              Contact Me
            </button>
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
