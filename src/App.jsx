import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skill from "./components/skill/Skill.jsx";
import Project from "./components/project/Project.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  const [modeStatus, setModeStatus] = useState(false);

  return (
    <div className="mode-render">
      <div>
        <Navbar setModeStatus={setModeStatus} />
        <Home modeStatus={modeStatus} />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
