// import React from "react";

// const SuperpowersCard = ({ content, content2, title, img, img1 }) => {
//   return (
//     <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[500px] md:mr-10 sm:mr-5 mr-0 my-5  relative">
//       <div className="absolute left-0 bottom-0 h-[300px] w-[0.2px] bg-gray-800 flex items-center">
//         <div className="absolute  bottom-[90px] h-[10px] w-[0.1px] bg-white mx-auto"></div>
//       </div>

//       <img src={img} className="w-[468px] h-[256px] object-contain my-5" />
//       <img src={img1} className="w-[48px] h-[48px] object-contain my-5" />
//       <p className="font-inter font-normal text-[16px] leading-[30px] text-dimWhite">
//         <span className="text-[#F4F0FF] "> {title}</span> {content2}
//       </p>
//       <p className="font-inter font-normal text-[16px] leading-[30px] text-dimWhite text-opacity-70">
//         {content}
//       </p>
//     </div>
//   );
// };

// export default SuperpowersCard;
"use client";
import { motion } from "framer-motion";

const SuperpowersCard = ({ content, content2, title, img, img1 }) => {
  return (
    <motion.div
      className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[500px] md:mr-10 sm:mr-5 mr-0 my-5 relative"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
    >
      <div className="absolute left-0 bottom-0 h-[300px] w-[0.2px] bg-gray-800 flex items-center">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "10px" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="absolute bottom-[90px] w-[0.1px] bg-white mx-auto"
        />
      </div>

      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        src={img}
        className="w-[468px] h-[256px] object-contain my-5"
      />

      <motion.img
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        src={img1}
        className="w-[48px] h-[48px] object-contain my-5"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="font-inter font-normal text-[16px] leading-[30px] text-dimWhite"
      >
        <span className="text-[#F4F0FF]"> {title}</span> {content2}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="font-inter font-normal text-[16px] leading-[30px] text-dimWhite text-opacity-70"
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

export default SuperpowersCard;
