// import React from "react";
// import { information } from "../assets";
// import styles from "../style";

// import { feedback4 } from "../constans";
// import InformationCard from "./InformationCard";
// const Information = () => {
//   return (
//     <section
//       className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-auto h-full sm:mt-[100px]`}
//     >
//       {/* Image Section */}
//       <div className="relative w-full h-full sm:h-[600px] flex  justify-center items-center">
//         <img
//           src={information}
//           className="sm:w-[784px] sm:h-[784px] h-[500px] object-cover sm:object-contain"
//           alt="Hero Background"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="relative z-10 sm:bottom-[250px] bottom-[200px] flex flex-col items-center text-center ">
//         {/* Badge */}
//         <div className="rounded-full sm:w-[200px] w-[150px] sm:h-[40px] h-[30px] border border-purple-400 flex justify-center items-center mb-4">
//           <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]">
//             Research and reading
//           </p>
//         </div>

//         {/* Heading and Subtext */}
//         <h1 className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 ss:leading-[100px] leading-[35px]">
//           Never lose information
//         </h1>
//         <p
//           className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[580px]`}
//         >
//           Collect your web snippets, Kindle highlights and important links – all
//           in one place. Then quickly find them again from any device.
//         </p>
//       </div>

//       {/* Feedback Section */}
//       <div className="relative z-10 bottom-[100px] flex flex-wrap justify-center items-center w-full">
//         {feedback4.map((card) => (
//           <InformationCard key={card.id} {...card} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Information;
"use client";
import { information } from "../assets";
import styles from "../style";
import { feedback4 } from "../constans";
import InformationCard from "./InformationCard";
import { motion } from "framer-motion";

const Information = () => {
  return (
    <section
      className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-auto h-full sm:mt-[100px]`}
    >
      {/* Image Section */}
      <div className="relative w-full h-full sm:h-[600px] flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          src={information}
          className="sm:w-[784px] sm:h-[784px] h-[500px] object-cover sm:object-contain"
          alt="Hero Background"
        />
      </div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 sm:bottom-[250px] bottom-[200px] flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-full sm:w-[200px] w-[150px] sm:h-[40px] h-[30px] border border-purple-400 flex justify-center items-center mb-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]"
          >
            Research and reading
          </motion.p>
        </motion.div>

        {/* Heading and Subtext */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 ss:leading-[100px] leading-[35px]"
        >
          Never lose information
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[580px]`}
        >
          Collect your web snippets, Kindle highlights and important links – all
          in one place. Then quickly find them again from any device.
        </motion.p>
      </motion.div>

      {/* Feedback Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 bottom-[100px] flex flex-wrap justify-center items-center w-full"
      >
        {feedback4.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.3 + index * 0.2,
              ease: "easeOut",
            }}
          >
            <InformationCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Information;
