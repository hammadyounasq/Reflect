// const NotesServiceCarde = ({ content, title, img }) => {
//   return (
//     <div className="flex flex-col items-center text-center px-6 py-8 rounded-[15px] max-w-[280px]  relative">
//       <div className="absolute left-0 top-0 h-full w-[0.2px] bg-gray-800 flex items-center">
//         <div className="absolute  bottom-[90px] h-[10px] w-[0.1px] bg-white mx-auto"></div>
//       </div>

//       <img
//         src={img}
//         alt={title}
//         className="w-[40px] h-[40px] object-contain mb-4"
//       />
//       <h4 className="font-medium text-[16px] leading-[24px] text-white mb-2">
//         {title}
//       </h4>
//       <p className="font-normal text-[14px] leading-[20px] text-gray-400">
//         {content}
//       </p>
//     </div>
//   );
// };

// export default NotesServiceCarde;
"use client";
import { motion } from "framer-motion";

const NotesServiceCarde = ({ content, title, img }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center px-6 py-8 rounded-[15px] w-[280px] relative"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-[2px] rounded-full bg-gray-800 flex items-center"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute bottom-[90px] h-[10px] w-[2px] rounded-full bg-white mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        />
      </motion.div>

      <motion.img
        src={img}
        alt={title}
        className="w-[40px] h-[40px] object-contain mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.5 },
        }}
      />
      <motion.h4
        className="font-medium text-[16px] leading-[24px] text-white mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h4>
      <motion.p
        className="font-normal text-[14px] leading-[20px] text-gray-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

export default NotesServiceCarde;
