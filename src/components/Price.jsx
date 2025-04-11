// import { pricebackground } from "../assets";
// import styles from "../style";
// import Listdiv from "./Listdiv";
// import { priceList } from "../constans";
// const Price = () => {
//   return (
//     <section
//       className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-auto h-full`}
//     >
//       <div className="relative z-10 flex flex-col items-center text-center mt-[200px] sm:mt-[250px]">
//         <div className="rounded-full sm:w-[130px] w-[120px]  sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center mb-5 ">
//           <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
//             Get access
//           </p>
//         </div>

//         <h1 className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 sm:leading-[60px] leading-[30px] text-center">
//           <span className="block text-gradient1">
//             We like keeping things simple
//           </span>
//           <span className="block text-gradient1">One plan one price.</span>
//         </h1>
//       </div>
//       <div className="relative z-10 flex flex-row items-center  justify-start mt-10">
//         <h4 className="font-roboto font-semibold sm:text-[50px] text-[40px] text-pinkgradient2  sm:leading-[60px] leading-[30px] text-center mr-4">
//           $10
//         </h4>
//         <p className=" font-inter font-normal sm:text-[16px] text-[13px] sm:leading-[30px] leading-[20px] text-dimWhite opacity-70">
//           <span className="block ">/month</span>
//           <span className="block ">(if billed annually)</span>
//         </p>
//       </div>
//       <div className="flex justify-center items-center mt-20">
//         <div className="relative z-10 grid sm:grid-cols-2 grid-cols-1  sm:gap-x-10 gap-x-1  items-center w-full max-w-[800px]">
//           {priceList.map((card, index) => (
//             <Listdiv key={card.id} {...card} index={index} />
//           ))}
//         </div>
//       </div>
//       <div className="relative z-10 top-20 rounded-[10px] sm:w-[177px] w-[120px]  sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center  bg-dimpupple bg-opacity-30">
//         <p className="font-poppins font-normal text-purple-100 sm:text-[14px] text-[10px]">
//           Start your 14-day trial
//         </p>
//       </div>
//       <div className=" w-full flex justify-center items-center sm:h-[431px] h-[250px]">
//         <img
//           src={pricebackground}
//           className=" sm:w-[744px] w-full sm:h-[837px] h-full "
//           alt="Calendar Image"
//         />
//       </div>
//     </section>
//   );
// };

// export default Price;
"use client";

import { motion } from "framer-motion";
import { pricebackground } from "../assets";
import styles from "../style";
import Listdiv from "./Listdiv";
import { priceList } from "../constans";

const Price = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  return (
    <section
      className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-auto h-full overflow-hidden`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex flex-col items-center text-center mt-[200px] sm:mt-[250px]"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="rounded-full sm:w-[130px] w-[120px] sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center mb-5 backdrop-blur-sm"
        >
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
            Get access
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 sm:leading-[60px] leading-[30px] text-center"
        >
          <span className="block text-gradient1">
            We like keeping things simple
          </span>
          <span className="block text-gradient1">One plan one price.</span>
        </motion.h1>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="relative z-10 flex flex-row items-center justify-start mt-10"
      >
        <motion.h4
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="font-roboto font-semibold sm:text-[50px] text-[40px] text-pinkgradient2 sm:leading-[60px] leading-[30px] text-center mr-4"
        >
          $10
        </motion.h4>
        <p className="font-inter font-normal sm:text-[16px] text-[13px] sm:leading-[30px] leading-[20px] text-dimWhite opacity-70">
          <span className="block">/month</span>
          <span className="block">(if billed annually)</span>
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={listContainerVariants}
        className="flex justify-center items-center mt-20"
      >
        <div className="relative z-10 grid sm:grid-cols-2 grid-cols-1 sm:gap-x-10 gap-x-1 items-center w-full max-w-[800px]">
          {priceList.map((card, index) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              custom={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Listdiv {...card} index={index} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 5px 15px rgba(124, 58, 237, 0.3)",
        }}
        className="relative z-10 top-20 rounded-[10px] sm:w-[177px] w-[120px] sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center bg-dimpupple bg-opacity-30 cursor-pointer backdrop-blur-sm transition-all duration-300"
      >
        <p className="font-poppins font-normal text-purple-100 sm:text-[14px] text-[10px]">
          Start your 14-day trial
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full flex justify-center items-center sm:h-[431px] h-[250px]"
      >
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={pricebackground}
          className="sm:w-[744px] w-full sm:h-[837px] h-full"
          alt="Calendar Image"
        />
      </motion.div>
    </section>
  );
};

export default Price;
