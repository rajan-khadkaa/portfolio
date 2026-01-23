import React, { useState, useRef } from "react";
import { counterItems } from "../constants";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectInfo from "../components/ProjectInfo";
import TitleHeader from "../components/TitleHeader";

const Projects = () => {
  const sectionRef = useRef(null);
  const [domain, setDomain] = useState("mobile");

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 4.5,
      },
    );
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-white dark:bg-black app-showcase section-padding"
    >
      <TitleHeader title="My Works" sub="Projects" />
      <div className="mx-auto grid-3-cols header-margin-proj w-full">
        {counterItems.map((item) => (
          <Tilt
            key={item.label}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glarePosition="all"
            transitionSpeed={1500}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            style={{
              // borderRadius: 12,
              overflow: "hidden",
              height: "fit-content",
              cursor: "pointer",
            }}
          >
            <div
              onClick={() => setDomain(item.domain)}
              className={`${
                item.domain === domain
                  ? "blue-gradient"
                  : // ? "bg-gradient-to-br from-orange-500 via-[#0191FF] to-black border-zinc-700"
                    "border-white-50 dark:border-black-50"
              } border-[1px] bg-white-50 dark:bg-black-50 p-10 flex flex-col justify-center transition-all duration-300`}
            >
              {/* <div
              onClick={() => setDomain(item.domain)}
              className={`${
                item.domain === domain ? "border-zinc-700" : "border-zinc-900"
              } border-[1.5px] bg-zinc-900 p-10 flex flex-col justify-center rounded-2xl`}
            > */}
              <div className="text-black-400 dark:text-white-400 text-lg mb-4">
                Let's see
              </div>
              <div className="counter-number text-black-200 dark:text-white-200 text-2xl lg:text-3xl font-bold mb-2">
                {item.label}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
      <div className="w-full">
        {domain === "mobile" && <ProjectInfo domainType="mobile" />}
        {domain === "web" && <ProjectInfo domainType="web" />}
        {domain === "design" && <ProjectInfo domainType="design" />}
      </div>
    </section>
  );
};

export default Projects;
