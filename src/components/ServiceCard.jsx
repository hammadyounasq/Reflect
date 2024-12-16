import React from "react";

const ServiceCard = ({ content, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-5  relative">
      {/* Left Border with Inner Border */}
      <div className="absolute left-0 top-0 h-full w-0.2 bg-gray-800 flex items-center">
        <div className="h-[10px] w-[0.1px] bg-white mx-auto"></div>
      </div>

      {/* Content */}
      <img src={img} className="w-[48px] h-[48px] object-contain my-5" />
      <h4 className="font-inter font-medium text-[16px] leading-[32px] text-white">
        {title}
      </h4>
      <p className="font-inter font-normal text-[16px] leading-[30px] text-dimWhite">
        {content}
      </p>
    </div>
  );
};

export default ServiceCard;
