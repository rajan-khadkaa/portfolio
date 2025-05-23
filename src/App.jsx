import React, { useState } from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import Workprocess from "./sections/Workprocess";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import HeroTexts from "./components/HeroTexts";
import Footer from "./sections/Footer";
import Model from "./components/Model";
import { Canvas } from "@react-three/fiber";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="relative">
      <div
        className={`
          ${show ? "" : "translate-y-[calc(100%+50px)]"}
          transition-all overflow-visible duration-500 fixed bottom-4 left-1/2 transform -translate-x-1/2 box-border rounded-full z-40
        `}
      >
        <Navbar />
      </div>
      <Hero />
      {/* <Canvas>
        <Model />
      </Canvas> */}
      <Projects />
      <Workprocess />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

// <main>
//   <div>
//     <h1 className="text-3xl">welcome to my portfolio</h1>
//   </div>
// </main>
