import React from "react";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5 header-margin">
      <div className="hero-badge">
        <p className="text-black-200 dark:text-white-200">{sub}</p>
      </div>
      <div className="text-black-100 dark:text-white-100 font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
