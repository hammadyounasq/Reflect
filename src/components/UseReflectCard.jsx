import React from "react";

const UseReflectCard = ({ content, title, img, index }) => {
  const isLarge = index >= 2; // Determines if the card should have larger dimensions

  return (
    <div className="flex flex-col items-center text-center px-6 sm:py-8 py-2 rounded-[15px] max-w-[280px]  ">
      <img
        src={img}
        className={`object-contain mb-4 ${
          isLarge ? "w-[100px] h-[50px]" : "w-[40px] h-[40px]"
        }`}
        alt={title}
      />
      <h4 className="font-medium text-[16px] leading-[24px] text-white mb-2">
        {title}
      </h4>
      <p className="font-normal sm:text-[14px] text-[10px] leading-[20px] text-gray-400">
        {content}
      </p>
    </div>
  );
};

export default UseReflectCard;
