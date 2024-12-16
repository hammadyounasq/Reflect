import React from "react";

const NotesServiceCarde = ({ content, title, img }) => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 rounded-[15px] max-w-[280px]  relative">
      <div className="absolute left-0 top-0 h-full w-[0.2px] bg-gray-800 flex items-center">
        <div className="absolute  bottom-[90px] h-[10px] w-[0.1px] bg-white mx-auto"></div>
      </div>

      <img
        src={img}
        alt={title}
        className="w-[40px] h-[40px] object-contain mb-4"
      />
      <h4 className="font-medium text-[16px] leading-[24px] text-white mb-2">
        {title}
      </h4>
      <p className="font-normal text-[14px] leading-[20px] text-gray-400">
        {content}
      </p>
    </div>
  );
};

export default NotesServiceCarde;
