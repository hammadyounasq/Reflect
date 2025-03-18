// import React from "react";
// import styles from "../style";
// import { world } from "../assets";
// import Academy from "./Academy";
// const Team = () => {
//   return (
//     <section
//       className={`relative  flex flex-col  mt-40 items-center w-full  sm:h-[1600px] h-[1100px] `}
//     >
//       {/* Text Content */}
//       <div className="flex flex-col items-center text-center mt-[10px]">
//         {/* About Badge */}
//         <div className="rounded-full sm:w-[130px] w-[120px] sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center mb-5">
//           <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
//             About
//           </p>
//         </div>

//         {/* Heading */}
//         <h1 className="font-roboto font-semibold sm:text-[50px] text-[30px] text-gradient1 sm:leading-[60px] leading-[30px]">
//           <span className="block text-gradient1">We're an indie team</span>
//           <span className="block text-gradient1">dotted across the globe</span>
//         </h1>

//         {/* Paragraph */}
//         <p
//           className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[500px] sm:text-[16px] text-[13px]`}
//         >
//           Our mission is to improve the way people think by making a jolly good
//           note-taking app.
//         </p>
//       </div>

//       <div className="mt-10 rounded-[10px] sm:w-[177px] w-[120px] sm:h-[40px] h-[40px] border border-white border-opacity-30 flex justify-center items-center bg-black-gradient-2 bg-opacity-30">
//         <p className="font-poppins font-normal text-[#F4F0FF] sm:text-[14px] text-[10px]">
//           See our values
//         </p>
//       </div>
//       <div className=" z-0 sm:bottom-20  bottom-0 w-[1216px] flex justify-center items-center sm:h-[767px] h-[300px]">
//         <img
//           src={world}
//           className="sm:w-[1216px] w-[600px] w-full sm:h-[767px] h-[500px]"
//           alt="World Map"
//         />
//         <div className="absolute sm:bottom-0  bottom-20 ">
//           <Academy />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
"use client";
import { motion } from "framer-motion";
import styles from "../style";
import { world } from "../assets";
import AnimatedAcademy from "./Academy";

const Team = () => {
  // Simplified animation variants to prevent refresh issues
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.3)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="relative flex flex-col mt-40 items-center w-full sm:h-[1600px] h-[1100px]">
      {/* Text Content */}
      <div className="flex flex-col items-center text-center mt-[10px]">
        {/* About Badge */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={itemVariants}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="rounded-full sm:w-[130px] w-[120px] sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center mb-5"
        >
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
            About
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial="initial"
          animate="animate"
          variants={itemVariants}
          transition={{ delay: 0.1 }}
          className="font-roboto font-semibold sm:text-[50px] text-[30px] text-gradient1 sm:leading-[60px] leading-[30px]"
        >
          <span className="block text-gradient1">We're an indie team</span>
          <span className="block text-gradient1">dotted across the globe</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial="initial"
          animate="animate"
          variants={itemVariants}
          transition={{ delay: 0.2 }}
          className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[500px] sm:text-[16px] text-[13px]`}
        >
          Our mission is to improve the way people think by making a jolly good
          note-taking app.
        </motion.p>
      </div>

      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        transition={{ delay: 0.3 }}
        className="mt-10 rounded-[10px] sm:w-[177px] w-[120px] sm:h-[40px] h-[40px] border border-white border-opacity-30 flex justify-center items-center bg-black-gradient-2 bg-opacity-30 cursor-pointer"
      >
        <p className="font-poppins font-normal text-[#F4F0FF] sm:text-[14px] text-[10px]">
          See our values
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-0 sm:bottom-20 bottom-0 w-[1216px] flex justify-center items-center sm:h-[767px] h-[300px]"
      >
        <motion.img
          src={world}
          className="sm:w-[1216px] w-[600px] w-full sm:h-[767px] h-[500px]"
          alt="World Map"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <div className="absolute sm:bottom-0 bottom-20">
          <AnimatedAcademy />
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
