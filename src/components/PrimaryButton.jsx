import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const PrimaryButton = ({
  CustomStyle,
  text,
  btnClick,
  ArrowStyle,
  chkBtnDisabled,
  blurShape1,
  blurShape2,
}) => {
  return (
    <button
      disabled={chkBtnDisabled}
      onClick={btnClick}
      className={`${CustomStyle} cursor-pointer relative overflow-hidden p-2 lg:px-8 py-4 flex items-center justify-center gap-1 group bg-black dark:bg-white text-white-50 dark:text-black-50 hover:text-black dark:hover:text-white  border border-white-200 dark:border-black-400 transition-colors duration-700 hover:bg-white-100 dark:hover:bg-black-100`}
    >
      {/* Parent container for consistent blur positioning */}
      <div className="absolute inset-0 overflow-hidden">
        {/* White/black blur */}
        <div
          className={` ${blurShape1} blur-lg animate-pulse size-32 md:size-60 absolute rounded-full
          bg-black dark:bg-white transition-all duration-500
          group-hover:-translate-y-[10%] group-hover:-translate-x-[100%] group-hover:scale-110`}
        />

        {/* Blue blur */}
        <div
          className={`${blurShape2} blur-lg animate-pulse size-40 md:size-64 absolute rounded-full 
          bg-[#0191FF] transition-all duration-300
          group-hover:-translate-y-[55%] group-hover:-translate-x-[20%] group-hover:scale-110`}
        />
      </div>

      <div className="z-30 flex items-center gap-2">
        <p className="text-base font-medium">{text}</p>
        <FaArrowDown
          className={`${ArrowStyle} transform transition-all duration-500
            opacity-0 scale-0`}
          size={14}
        />
      </div>
      {/* <div className="w-2 h-10 bg-yellow-400 sm:bg-red-400 md:bg-green-400 lg:bg-blue-500 xl:bg-white-50" /> */}
    </button>
  );
};

//OPTION
// const PrimaryButton = ({ CustomStyle, text }) => {
//   return (
//     <button
//       style={{
//         "--blur-left": "30%",
//         "--blur-right": "70%",
//       }}
//       className={`${CustomStyle} overflow-visible relative px-8 py-4 flex items-center justify-center gap-1 group bg-white text-black-50 hover:text-white border border-white/25 transition-colors duration-700 hover:bg-black-50 rounded-sm`}
//     >
//       <div
//         style={{ left: "var(--blur-left)" }}
//         className="blur-lg size-60 absolute rounded-full -translate-x-1/2 bottom-0 bg-white/45 transition-all duration-500 group-hover:translate-y-[-5%]"
//       />
//       <div
//         style={{ left: "var(--blur-right)" }}
//         className="blur-lg size-64 absolute rounded-full -translate-x-1/2 top-2/3 -translate-y-1/2 bg-[#0191FF] transition-all duration-300 group-hover:-translate-y-[60%]"
//       />
//       <div className="z-30 flex items-center gap-2">
//         <p className="text-base font-medium">{text}</p>
//         <FaArrowDown
//           className="transform transition-all duration-500
//                  opacity-0 scale-0 -translate-y-[200%] animate-bounce sm:group-hover:animate-bounce
//                  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-[10%]"
//           size={14}
//         />
//       </div>
//     </button>
//   );
// };

// const PrimaryButton = ({ CustomStyle, text }) => {
//   return (
//     <button
//       className={`${CustomStyle}  overflow-visible relative px-8 py-4  flex items-center justify-center gap-1 group bg-white text-black-50 hover:text-white border border-white/25 transition-colors duration-700 hover:bg-black-50 rounded-sm`}
//     >
//       <div className="blur-lg  size-60 absolute rounded-full left-[25%] bottom-0 translate-x-[80%] bg-white/45 transition-all duration-500 group-hover:translate-x-[45%] group-hover:-translate-y-[5%]" />
//       <div className="blur-lg size-64 absolute rounded-full right-[10%] top-[65%] -translate-x-[50%] translate-y-[20%] bg-[#0191FF] transition-all duration-300 group-hover:-translate-x-[55%] group-hover:-translate-y-[15%]" />
//       <div className="z-30 flex items-center gap-2">
//         <p className="text-base font-medium">{text}</p>
//         <FaArrowDown
//           className="transform transition-all duration-500
//                  opacity-0 scale-0 -translate-y-[200%] animate-bounce sm:group-hover:animate-bounce
//                  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-[10%]"
//           size={14}
//         />
//       </div>
//     </button>
//   );
// };
export default PrimaryButton;
