const UseReflectCard = ({ content, title, img, index }) => {
  const isLarge = index >= 2; // Determines if the card should have larger dimensions

  return (
    <div className="flex flex-col items-center text-center px-4 md:px-6 py-4 md:py-6 rounded-[15px] w-full max-w-[280px] mx-auto transition-transform duration-300 hover:scale-105">
      <img
        src={img}
        className={`object-contain mb-4 transition-transform duration-300 hover:scale-110 ${
          isLarge
            ? "w-[80px] md:w-[100px] h-[40px] md:h-[50px]"
            : "w-[35px] md:w-[40px] h-[35px] md:h-[40px]"
        }`}
        alt={title}
      />
      <h4 className="font-medium text-[15px] md:text-[16px] leading-[1.5] text-white mb-2">
        {title}
      </h4>
      <p className="font-normal text-[12px] md:text-[14px] leading-[1.6] text-gray-400">
        {content}
      </p>
    </div>
  );
};

export default UseReflectCard;
// "use client";
// import { motion } from "framer-motion";

// const UseReflectCard = ({ content, title, img, index }) => {
//   return (
//     <motion.div
//       className="flex flex-col items-center text-center p-4 rounded-[15px] max-w-[300px] mx-auto"
//       whileHover={{
//         scale: 1.05,
//         transition: { duration: 0.3 },
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         whileHover={{
//           rotate: [0, -3, 3, -3, 0],
//           transition: { duration: 0.5 },
//         }}
//       >
//         <motion.img
//           src={img}
//           alt={title}
//           className="w-[60px] h-[60px] object-contain mb-4"
//         />
//       </motion.div>

//       <motion.h4
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="font-medium text-[18px] leading-[24px] text-white mb-2"
//       >
//         {title}
//       </motion.h4>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="font-normal text-[14px] leading-[20px] text-gray-400"
//       >
//         {content}
//       </motion.p>
//     </motion.div>
//   );
// };

// export default UseReflectCard;
