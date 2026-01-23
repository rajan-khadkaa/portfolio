import React, { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import {
  skillListBottom,
  skillListTop,
  highlightColors,
  skillListDark,
  skillListLight,
  skillListOriginal,
} from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Skills = () => {
  // const skillList = skillListOriginal;

  let skillList;
  const preferredTheme = localStorage.getItem("theme") || "dark";
  if (preferredTheme === "light") {
    // skillList = skillListLight;
    skillList = skillListOriginal;
  } else {
    skillList = skillListDark;
  }
  // const skillList = [...skillListTop, ...skillListBottom];
  const containerRef = useRef(null);
  const highlightRef = useRef(null);

  const cardRef = useRef(skillList.map(() => React.createRef()));
  const [indexedCard, setIndexedCard] = useState(null);
  useGSAP(() => {
    if (indexedCard !== null && containerRef.current && highlightRef.current) {
      const containerInfo = containerRef.current.getBoundingClientRect();
      const cardInfo =
        cardRef.current[indexedCard].current.getBoundingClientRect();
      const calcTop = cardInfo.top - containerInfo.top;
      const calcLeft = cardInfo.left - containerInfo.left;

      gsap.to(highlightRef.current, {
        top: calcTop + "px",
        left: calcLeft + "px",
        width: cardInfo.width + "px",
        height: cardInfo.height + "px",
        // backgroundColor: highlightColors[indexedCard],
        // duration: 0,
        duration: 0.2,
        opacity: 1,
        ease: "none",
      });
    } else if (highlightRef.current) {
      gsap.to(highlightRef.current, {
        opacity: 0,
        // duration: 0,
        duration: 0.2,
      });
    }
  }, [indexedCard]);

  return (
    <section
      id="skills"
      className="bg-white dark:bg-black w-full section-padding"
    >
      <div className="w-full h-full">
        <TitleHeader title="My skills & Tech Stacks" sub="Tech Stack" />
        {/* <div className="w-10 h-5 bg-yellow-400 sm:bg-red-400 md:bg-green-400 lg:bg-blue-500 xl:bg-white-50" /> */}
        <div
          ref={containerRef}
          className="relative skillsContainer w-full min-h-[400px] flex justify-center items-center"
        >
          <div className="skill-grid relative mx-0 my-auto h-full w-full flex flex-col border-[1px] border-gray-100 dark:border-gray-800">
            {/* Top Row: 5 cards */}
            {/* <div className="skill-grid-row flex flex-wrap justify-center items-center h-full border-b-[1px] border-b-gray-800">
              {skillListTop.map((skill, index) => (
                <div
                  ref={cardRef.current[index]}
                  onMouseEnter={() => setIndexedCard(index)}
                  onMouseLeave={() => setIndexedCard(null)}
                  key={skill.name}
                  className={`${
                    index !== 4 && "border-r-[1px] border-r-gray-800"
                  } z-10 skill-grid-item py-4 lg:py-8 min-w-[150px] md:min-w-[200px] lg:min-w-auto flex-col  flex flex-auto justify-center items-center h-full`}
                >
                  <img
                    className="size-24 lg:size-32"
                    src={skill.path}
                    alt="logo"
                  />
                  <p className="text-base lg:text-2xl">{skill.name}</p>
                </div>
              ))}
            </div> */}
            <div className="grid grid-rows-4 grid-cols-3 lg:grid-rows-3 lg:grid-cols-4 place-items-center">
              {skillList.map((skill, index) => (
                <div
                  ref={cardRef.current[index]}
                  onMouseEnter={() => setIndexedCard(index)}
                  onMouseLeave={() => setIndexedCard(null)}
                  key={index}
                  className={`z-10 border border-gray-100 dark:border-gray-800 skill-grid-item py-5 px-7 lg:px-4 lg:py-8 flex flex-col justify-center items-center w-full h-full`}
                >
                  <img className="-mt-2" src={skill.path} alt="logo" />
                  <p className="text-base text-black-400 dark:text-white-400 lg:text-xl text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row: 6 cards */}
            {/* <div className="skill-grid-row flex flex-wrap justify-center items-center h-full">
              {skillListBottom.map((skill, index) => {
                const bottomIndex = index + skillListTop.length;
                return (
                  <div
                    ref={cardRef.current[bottomIndex]}
                    onMouseEnter={() => setIndexedCard(bottomIndex)}
                    onMouseLeave={() => setIndexedCard(null)}
                    key={skill.name}
                    className={`${
                      index !== 5 && "border-r-[1px] border-r-gray-800"
                    } z-10 skill-grid-item py-4 lg:py-8 min-w-[150px]  lg:min-w-auto flex-col flex flex-auto justify-center items-center h-full`}
                  >
                    <img
                      className="size-24 lg:size-32"
                      src={skill.path}
                      alt="logo"
                    />
                    <p className="text-base lg:text-2xl">{skill.name}</p>
                  </div>
                );
              })}
            </div> */}

            {/* <div className="grid grid-rows-3 grid-cols-4 xl:grid-rows-1 xl:grid-cols-6 place-items-center">
              {skillListBottom.map((skill, index) => {
                const bottomIndex = index + skillListTop.length;
                return (
                  <div
                    ref={cardRef.current[bottomIndex]}
                    onMouseEnter={() => setIndexedCard(bottomIndex)}
                    onMouseLeave={() => setIndexedCard(null)}
                    key={skill.name}
                    className={`z-10 border border-gray-800 skill-grid-item px-4 py-8 flex flex-col justify-center items-center w-full h-full`}
                  >
                    <img className="-mt-2" src={skill.path} alt="logo" />
                    <p className="text-base lg:text-xl">{skill.name}</p>
                  </div>
                );
              })}
            </div> */}
          </div>
          {/* The Highlight Box */}
          <div
            ref={highlightRef}
            // className="z-0 skill-highlight absolute top-0 left-0 pointer-events-none transition-all duration-300 ease-in-out"
            className="z-0 skill-highlight blue-gradient absolute top-0 left-0 pointer-events-none"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
