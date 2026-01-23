import React from "react";
import { socialImgs } from "../constants";
import { ArrowUpIcon } from "@heroicons/react/16/solid";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black footer">
      <div className="flex-wrap flex-col md:flex-row gap-8 lg:gap-3 w-full flex items-center justify-between">
        {/* <div className="footer-container border-2"> */}

        <div className="socials text-center flex flex-row gap-3">
          {socialImgs.map((platform) => (
            // <a
            //   key={platform.url}
            //   // className="icon"
            //   target="_blank"
            //   href={platform.url}
            // >
            //   {/* <img src={platform.imgPath} alt="social icons" /> */}
            //   <p className="">{platform.name}</p>
            // </a>
            <a
              key={platform.name}
              className={`cursor-pointer hover:mr-1 text-black-200 dark:text-white-200 hover:text-black dark:hover:text-white transform transition-all duration-300 relative overflow-hidden group flex gap-1 items-center justify-center`}
              href={platform.url}
              target="_blank"
            >
              <p className="text-base md:text-base ml-0">{platform.name}</p>

              <FaArrowUp
                className="-translate-x-[200%] rotate-90 transform transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-45 "
                size={12}
              />
              <div className="w-[85%] transform transition-all duration-300 group-hover:w-[100%] absolute left-0 bottom-0 h-[0.08rem] bg-black-200 dark:bg-white-200 group-hover:bg-black dark:group-hover:bg-white"></div>
              {/* <div className="w-[85%] transition-transform duration-300 group-hover:w-[100%] absolute group-hover:bg-gradient-to-r from-blue-400 to-white left-0 bottom-0 h-[0.1rem] bg-white  transition-transform duration-200"></div> */}
              {/* <div className="w-[100%] absolute left-0 bottom-0 h-[0.1rem] bg-white -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-200"></div> */}
            </a>
          ))}
        </div>
        <div className="flex text-black-200 dark:text-white-200 items-center justify-center md:justify-baseline min-w-fit">
          <p>© {new Date().getFullYear()} Rajan | All rights reserved.</p>
        </div>
        {/* <div className="flex items-center justify-end min-w-fit border-2">
          <a
            className="bg-zinc-900 flex flex-row items-center gap-2 p-5 rounded-full w-fit"
            href="#home"
          >
            <ArrowUpIcon className="size-6" />
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
