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
//---------------
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
// "use client";

// import { superpowers } from "../assets";
// import styles from "../style";
// import SuperpowersCard from "./SuperpowersCard";
// import { feedback3 } from "../constans";
// import { motion } from "framer-motion";
// import { useRef } from "react";

// const Superpowers = () => {
//   const sectionRef = useRef(null);

//   return (
//     <section
//       ref={sectionRef}
//       className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-[1700px] h-full sm:mt-[100px] overflow-hidden`}
//     >
//       <div className="absolute inset-0 flex justify-center items-center w-full sm:h-full h-[400px]">
//         <motion.div
//           className="w-full h-full relative"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <motion.img
//             src={superpowers}
//             className="w-full h-full object-cover sm:object-contain"
//             alt="Hero Background"
//           />
//         </motion.div>

//         {/* Upward moving lines - enhanced version */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
//           {/* More lines with varied properties for a richer effect */}
//           {[...Array(30)].map((_, i) => (
//             <motion.div
//               key={`line-${i}`}
//               className="absolute bg-gradient-to-t from-transparent via-purple-300/30 to-transparent"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 bottom: `-100px`,
//                 width: `${Math.random() * 1.5 + 0.3}px`, // Varied line thickness
//                 height: `${Math.random() * 150 + 50}px`, // Varied line height
//                 opacity: Math.random() * 0.6 + 0.2,
//               }}
//               animate={{
//                 y: [0, -300 - Math.random() * 400], // Varied travel distance
//                 opacity: [0, 0.7, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 6 + 5, // Varied speed
//                 repeat: Number.POSITIVE_INFINITY,
//                 delay: Math.random() * 8, // More varied delays for natural effect
//                 ease: "linear",
//               }}
//             />
//           ))}

//           {/* Add a few brighter, more prominent lines */}
//           {[...Array(8)].map((_, i) => (
//             <motion.div
//               key={`bright-line-${i}`}
//               className="absolute bg-gradient-to-t from-transparent via-purple-200/50 to-transparent"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 bottom: `-100px`,
//                 width: `${Math.random() * 1 + 0.8}px`, // Slightly thicker
//                 height: `${Math.random() * 200 + 100}px`, // Longer lines
//                 opacity: Math.random() * 0.7 + 0.3, // Brighter
//               }}
//               animate={{
//                 y: [0, -400 - Math.random() * 500],
//                 opacity: [0, 0.8, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 7 + 8, // Slower for more dramatic effect
//                 repeat: Number.POSITIVE_INFINITY,
//                 delay: Math.random() * 10,
//                 ease: "linear",
//               }}
//             />
//           ))}

//           {/* Add a few blue-tinted lines for color variety */}
//           {[...Array(5)].map((_, i) => (
//             <motion.div
//               key={`blue-line-${i}`}
//               className="absolute bg-gradient-to-t from-transparent via-blue-300/30 to-transparent"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 bottom: `-100px`,
//                 width: `${Math.random() * 1 + 0.5}px`,
//                 height: `${Math.random() * 120 + 80}px`,
//                 opacity: Math.random() * 0.5 + 0.2,
//               }}
//               animate={{
//                 y: [0, -350 - Math.random() * 350],
//                 opacity: [0, 0.6, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 6 + 7,
//                 repeat: Number.POSITIVE_INFINITY,
//                 delay: Math.random() * 8,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="relative z-10 rounded-full sm:w-[200px] w-[150px] sm:h-[40px] h-[30px] border border-purple-400 flex justify-center items-center sm:mt-[780px] mt-[200px]"
//       >
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]"
//         >
//           All your notes, connected
//         </motion.p>
//       </motion.div>

//       {/* Heading and Subtext */}
//       <div className="relative z-10 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 ss:leading-[100px] leading-[35px]"
//         >
//           Give your brain superpowers
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.9 }}
//           className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-1 text-center max-w-[580px]`}
//         >
//           Mirror the way your mind works by associating notes through backlinks.
//           Reflect builds you a second brain that you can reference anytime.
//         </motion.p>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.1 }}
//         className="relative z-10 flex flex-wrap justify-center items-center w-full feedback-container"
//       >
//         {feedback3.map((card, index) => (
//           <motion.div
//             key={card.id}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.7,
//               delay: 1.2 + index * 0.2,
//               ease: "easeOut",
//             }}
//           >
//             <SuperpowersCard {...card} />
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Superpowers;
