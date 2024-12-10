import React from "react";
import "./Footer.css";
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
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-whole-container">
        <h2>RAJAN KHADKA</h2>
        <div className="footer-links">
          <Link to="home" className="link-footer" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="story" className="link-footer" smooth={true} duration={500}>
            Story
          </Link>
          <Link
            to="expertise"
            className="link-footer"
            smooth={true}
            duration={500}
          >
            Expertise
          </Link>
          <Link
            to="projects"
            className="link-footer"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="link-footer"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <div className="social-media-icons">
          <a
            href="https://www.linkedin.com/in/rajan-khadka-106868268/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <Linkedin02Icon size={20} color={"#eaeaea"} variant={"stroke"} />
          </a>
          {/* <GithubIcon size={18} color={"#3c6e71"} variant={"stroke"} /> */}
          <a href="https://github.com/rajan-khadkaa" target="_blank">
            <Github01Icon size={20} color={"#eaeaea"} variant={"stroke"} />
          </a>
          <a
            href="https://www.google.com/url?q=https://api.whatsapp.com/qr/EFJ6RUYPO4AGK1?autoload%3D1%26app_absent%3D0&sa=D&source=apps-viewer-frontend&ust=1733922172791685&usg=AOvVaw36Hw3FZ3enl-ug7_rABQtF&hl=en-GB"
            target="_blank"
          >
            <WhatsappIcon size={20} color={"#eaeaea"} variant={"stroke"} />
          </a>
        </div>
        <p>&copy; Rajan Khadka. All Rights Reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
