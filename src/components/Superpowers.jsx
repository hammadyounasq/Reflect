// import { superpowers } from "../assets";
// import styles from "../style";
// import SuperpowersCard from "./SuperpowersCard";
// import { feedback3 } from "../constans";

// const Superpowers = () => {
//   return (
//     <section
//       className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-[1700px] h-full sm:mt-[100px] `}
//     >
//       <div className="absolute inset-0  flex justify-center items-center w-full sm:h-full h-[400px]">
//         <img
//           src={superpowers}
//           className="w-full h-full object-cover sm:object-contain"
//           alt="Hero Background"
//         />
//       </div>

//       <div className="relative z-10 rounded-full sm:w-[200px] w-[150px] sm:h-[40px] h-[30px] border border-purple-400 flex justify-center items-center sm:mt-[780px] mt-[200px]">
//         <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]">
//           All your notes, connected
//         </p>
//       </div>

//       {/* Heading and Subtext */}
//       <div className="relative z-10 text-center ">
//         <h1 className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 ss:leading-[100px] leading-[35px]">
//           Give your brain superpowers
//         </h1>
//         <p
//           className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-1 text-center  max-w-[580px]`}
//         >
//           Mirror the way your mind works by associating notes through backlinks.
//           Reflect builds you a second brain that you can reference anytime.
//         </p>
//       </div>
//       <div className="relative z-10 flex flex-wrap  justify-center items-center w-full feedback-container">
//         {feedback3.map((card) => (
//           <SuperpowersCard key={card.id} {...card} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Superpowers;
"use client";

import { superpowers } from "../assets";
import styles from "../style";
import SuperpowersCard from "./SuperpowersCard";
import { feedback3 } from "../constans";
import { motion } from "framer-motion";

const Superpowers = () => {
  return (
    <section
      className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-[1700px] h-full sm:mt-[100px] `}
    >
      <div className="absolute inset-0 flex justify-center items-center w-full sm:h-full h-[400px]">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={superpowers}
          className="w-full h-full object-cover sm:object-contain"
          alt="Hero Background"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 rounded-full sm:w-[200px] w-[150px] sm:h-[40px] h-[30px] border border-purple-400 flex justify-center items-center sm:mt-[780px] mt-[200px]"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]"
        >
          All your notes, connected
        </motion.p>
      </motion.div>

      {/* Heading and Subtext */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 ss:leading-[100px] leading-[35px]"
        >
          Give your brain superpowers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-1 text-center max-w-[580px]`}
        >
          Mirror the way your mind works by associating notes through backlinks.
          Reflect builds you a second brain that you can reference anytime.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative z-10 flex flex-wrap justify-center items-center w-full feedback-container"
      >
        {feedback3.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.2 + index * 0.2,
              ease: "easeOut",
            }}
          >
            <SuperpowersCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Superpowers;
