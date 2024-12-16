import React from "react";

const feedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-7 py-8 rounded-[20px] h-[212px] max-w-[480px] md:mr-6 sm:mr-5 mr-0 my-5 bg-black-gradient-2">
      <div className="flex flex-row">
        <img src={img} className="w-[44px] h-[44px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-inter font-medium text-[16px] leading-[32px] text-white ">
            {name}
          </h4>
          <p className="font-inter font-normal text-[14px] leading-[15px] text-dimWhite ">
            {title}
          </p>
        </div>
      </div>
      <p className="font-inter font-nomal text-[16px] leading-[24px] text-white my-4 opacity-70">
        {content}
      </p>
    </div>
  );
};

export default feedbackCard;
