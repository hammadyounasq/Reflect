// import React from "react";
import { icondot } from "../assets";
// import styles from "../style";
// import { priceList } from "../constans";
// const Listdiv = ({ content, index }) => {
//   return (
//     <div className={`flex flex-row items-center mt-5`}>
//       <img src={icondot} className="mr-5 w-[24px] h-[24px]" alt="icon dot" />
//       <p className="font-inter font-normal sm:text-[16px] text-[12px] leading-[30px] text-[#F4F0FF]">
//         {content}
//       </p>
//     </div>
//   );
// };

// export default Listdiv;
("use client");

import { motion } from "framer-motion";
// import { checkmark } from "../assets";

// Assuming this is what your Listdiv component looks like
// Modify as needed to match your actual implementation
const Listdiv = ({ title, content, index }) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex flex-row items-start mb-6"
    >
      <div className="w-[24px] h-[24px] mr-2">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 * index, type: "spring", stiffness: 300 }}
          src={icondot}
          alt="checkmark"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[18px] text-white leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

export default Listdiv;
