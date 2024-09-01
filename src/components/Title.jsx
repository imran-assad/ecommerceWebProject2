import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <>
      <div className="inline-flex gap-2 items-center mb-3">
        <p className="text-gray-500">
          {text1} <span className="text-gray-700 font-medium">{text2}</span>
        </p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        exercitationem aperiam non consequatur porro.
      </p>
    </>
  );
};

export default Title;
