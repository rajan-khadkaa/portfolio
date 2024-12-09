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

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-whole-container">
        <h2>RAJAN KHADKA</h2>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#story">Story</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-media-icons">
          <a href="www.linkedin.com" target="_blank">
            <Linkedin02Icon size={20} color={"#eaeaea"} variant={"stroke"} />
          </a>
          {/* <GithubIcon size={18} color={"#3c6e71"} variant={"stroke"} /> */}
          <a href="www.github.com" target="_blank">
            <Github01Icon size={20} color={"#eaeaea"} variant={"stroke"} />
          </a>
          <a href="www.whatsapp.com" target="_blank">
            <WhatsappIcon size={20} color={"#eaeaea"} variant={"stroke"} />
          </a>
        </div>
        <p>&copy; Rajan Khadka. All Rights Reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
