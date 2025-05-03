import React from "react";
import TitleHeader from "../components/TitleHeader";
// import { div } from "three/tsl";
import { workProcess } from "../constants/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Workprocess = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // gsap.utils.toArray(".timeline-logo").forEach((numCard) => {
    //   gsap.fromTo(
    //     numCard,
    //     {
    //       scale: 0,
    //       opacity: 0,
    //     },
    //     {
    //       scale: 1,
    //       opacity: 1,
    //       duration: 1,
    //       ease: "back.out(1.7)",
    //       scrollTrigger: {
    //         trigger: numCard,
    //         start: "top 80%",
    //       },
    //     }
    //   );
    // });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center", //stops when the 70% of the element is past above the center of the screen
        onUpdate: (self) => {
          //this onUpdate runs everytime there is change in scroll between the start and the end point.
          gsap.to(".timeline", {
            scaleY: 1 - self.progress, //the initial value is 0 and final is 1 so 1-0=1(full visible), 1-0.5=0.5 (half visible) and 1-1=0 (invisible)
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((workCard) => {
      gsap.from(workCard, {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: workCard,
          start: "top 70%",
        },
      });
    });
  }, []);

  return (
    <section className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5 ">
        <TitleHeader title="How I work" sub="Work Process" />
        <div className="mt-32 relative">
          <div className="realtive z-50 xl:space-y-32 space-y-10">
            {workProcess.map((process, index) => (
              <div key={process.title} className="exp-card-wrapper ">
                <div className="xl:w-2/6">
                  {/* {process.title} */}
                  <div className="timeline-card flex flex-row justify-end -mr-8 md:-mt-4 -mt-3  md:mb-0 mb-14  ">
                    {process.techLogo.map((img) => (
                      <div
                        key={img.name}
                        style={{ border: "2px solid #303030" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor = img.color)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor = "#303030")
                        }
                        className={`w-20 overflow-visible h-20 p-2 mr-14 transition-colors duration-300 flex flex-col items-center rounded-full`}
                      >
                        <img
                          className="size-full"
                          src={img.path}
                          alt={img.name}
                        />
                        <p className="mt-4 text-center w-[80px]">{img.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="xl:w-4/6">
                  <div className="work-card flex items-start">
                    <div className="timeline-wrapper ">
                      <div className="timeline" />{" "}
                      {/* rectangular box containing the lines and the images */}
                      {/* <div className="gradient-line w-1 h-[90%] sm:h-[105%] relative z-10" />{" "} */}
                      {/*the thin line */}
                      <div className="gradient-line relative -z-0 w-1 h-full" />
                    </div>
                    {/* <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20"> */}
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative ">
                      {" "}
                      {/* each rectangular box  on right side */}
                      <div
                        className={` timeline-logo relative  z-20 -translate-y-1 -translate-x-2 md:-translate-x-1  md:-translate-y-5`}
                      >
                        {/* <img src={process.logoPath} alt="logo" /> */}
                        <p className="text-xl md:text-3xl font-bold ">
                          {index + 1}
                        </p>
                      </div>
                      <div className="">
                        <h1 className="font-semibold text-3xl">
                          {process.title}
                        </h1>
                        {/* <p></p> */}
                        {/* <p className="text-[#839cb5] italic">Process</p> */}
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5">
                          {process.processWork.map((work) => (
                            <li key={work} className="text-lg">
                              {work}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workprocess;
