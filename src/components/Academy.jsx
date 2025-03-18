import React from "react";
import { academybackground, Keys } from "../assets";
import styles from "../style";

const Academy = () => {
  return (
    <section
      className={` flex flex-col  items-center w-full  sm:h-[600px] h-[300px]`}
    >
      <div className="  flex flex-col items-center text-center ">
        <div className="rounded-full sm:w-[130px] w-[120px]  sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center mb-5 ">
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
            Integrations
          </p>
        </div>

        <h1 className="font-roboto font-semibold sm:text-[50px] text-[30px] text-gradient1 sm:leading-[60px] leading-[30px] text-center">
          <span className="block text-gradient1">Learn how to take great</span>
          <span className="block text-gradient1">notes at our academy</span>
        </h1>
        <p
          className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[300px] sm:text-[16px] text-[13px]`}
        >
          Master the principles of note-taking in Reflect's free online Academy.
        </p>
        <div className="mt-10 rounded-[10px] sm:w-[177px] w-[120px] sm:h-[40px] h-[40px] border border-white border-opacity-30 flex justify-center items-center bg-black-gradient-2 bg-opacity-30">
          <p className="font-poppins font-normal text-[#F4F0FF] sm:text-[14px] text-[10px]">
            See our values
          </p>
        </div>
        <div className="absolute  sm:w-full  w-full flex justify-center items-center sm:h-[400px] h-[300px]">
          <img
            src={academybackground}
            className=" sm:w-[896px] w-full sm:h-[640px] h-[270px] object-cover sm:object-contain"
            alt="Hero Background"
          />
        </div>
      </div>

      {/* Background Image */}

      <img
        src={Keys}
        className="mt-20 sm:mt-60 w-full sm:w-full h-auto sm:h-[30px] h-[50px] z-10"
        alt="Keys"
      />
    </section>
  );
};

export default Academy;
// "use client";
// import { motion } from "framer-motion";
// import { academybackground, Keys } from "../assets";
// import styles from "../style";

// const AnimatedAcademy = () => {
//   // Simplified animation variants to prevent refresh issues
//   const itemVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const buttonVariants = {
//     initial: { scale: 1 },
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.3)",
//       transition: { duration: 0.3 },
//     },
//     tap: { scale: 0.98 },
//   };

//   return (
//     <section className="flex flex-col items-center w-full sm:h-[600px] h-[300px]">
//       <div className="flex flex-col items-center text-center">
//         {/* Badge */}
//         <motion.div
//           initial="initial"
//           animate="animate"
//           variants={itemVariants}
//           whileHover={{ y: -3, transition: { duration: 0.2 } }}
//           className="rounded-full sm:w-[130px] w-[120px] sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center mb-5"
//         >
//           <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
//             Integrations
//           </p>
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial="initial"
//           animate="animate"
//           variants={itemVariants}
//           transition={{ delay: 0.1 }}
//           className="font-roboto font-semibold sm:text-[50px] text-[30px] text-gradient1 sm:leading-[60px] leading-[30px] text-center"
//         >
//           <span className="block text-gradient1">Learn how to take great</span>
//           <span className="block text-gradient1">notes at our academy</span>
//         </motion.h1>

//         {/* Paragraph */}
//         <motion.p
//           initial="initial"
//           animate="animate"
//           variants={itemVariants}
//           transition={{ delay: 0.2 }}
//           className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[300px] sm:text-[16px] text-[13px]`}
//         >
//           Master the principles of note-taking in Reflect's free online Academy.
//         </motion.p>

//         {/* Button */}
//         <motion.div
//           initial="initial"
//           animate="animate"
//           whileHover="hover"
//           whileTap="tap"
//           variants={buttonVariants}
//           transition={{ delay: 0.3 }}
//           className="mt-10 rounded-[10px] sm:w-[177px] w-[120px] sm:h-[40px] h-[40px] border border-white border-opacity-30 flex justify-center items-center bg-black-gradient-2 bg-opacity-30 cursor-pointer"
//         >
//           <p className="font-poppins font-normal text-[#F4F0FF] sm:text-[14px] text-[10px]">
//             See our values
//           </p>
//         </motion.div>

//         {/* Background Image */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="absolute sm:w-full w-full flex justify-center items-center sm:h-[400px] h-[300px]"
//         >
//           <motion.img
//             src={academybackground}
//             className="sm:w-[896px] w-full sm:h-[640px] h-[270px] object-cover sm:object-contain"
//             alt="Hero Background"
//             animate={{
//               scale: [1, 1.01, 1],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "reverse",
//               ease: "easeInOut",
//             }}
//           />
//         </motion.div>
//       </div>

//       {/* Keys Image */}
//       <motion.img
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//         src={Keys}
//         className="mt-20 sm:mt-60 w-full sm:w-full h-auto sm:h-[30px] h-[50px] z-10"
//         alt="Keys"
//         animate={{
//           y: [0, -3, 0],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//           ease: "easeInOut",
//         }}
//       />
//     </section>
//   );
// };

// export default AnimatedAcademy;
