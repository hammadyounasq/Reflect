// import React, { useState, useEffect } from "react";
// import FeedbackCard from "./FeedbackCard";
// import { testimonials } from "../assets";

// const FeedbackSection = ({ feedbackclint }) => {
//   // Split the array into two rows
//   const firstRow = feedbackclint.slice(0, Math.ceil(feedbackclint.length / 2));
//   const secondRow = feedbackclint.slice(Math.ceil(feedbackclint.length / 2));

//   return (
//     <div className="w-full h-auto overflow-hidden relative">
//       <div className="w-full mb-6">
//         <img
//           src={testimonials}
//           alt="Description of the image"
//           className="w-full h-auto object-cover absolute z-10"
//         />
//       </div>
//       {/* First Row - Moving Right */}
//       <div className="flex space-x-4 animate-moveRight">
//         {firstRow.map((card) => (
//           <div key={card.id} className="flex-shrink-0 w-[480px] max-h-[212px]">
//             <FeedbackCard {...card} />
//           </div>
//         ))}
//       </div>

//       {/* Second Row - Moving Left */}
//       <div className="flex space-x-4 animate-moveLeft mt-6">
//         {secondRow.map((card) => (
//           <div key={card.id} className="flex-shrink-0 w-[480px]">
//             <FeedbackCard {...card} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeedbackSection;
"use client";
import FeedbackCard from "./feedbackCard";
import { testimonials } from "../assets";
import { motion } from "framer-motion";

const FeedbackSection = ({ feedbackclint }) => {
  // Split the array into two rows
  const firstRow = feedbackclint.slice(0, Math.ceil(feedbackclint.length / 2));
  const secondRow = feedbackclint.slice(Math.ceil(feedbackclint.length / 2));

  return (
    <div className="w-full h-auto overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full mb-6"
      >
        <img
          src={testimonials || "/placeholder.svg"}
          alt="Description of the image"
          className="w-full h-auto object-cover absolute z-10"
        />
      </motion.div>

      {/* First Row - Moving Right (Slower) */}
      <motion.div
        initial={{ x: -100 }}
        animate={{
          x: [0, -1500],
          transition: {
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 60, // Much slower animation (60 seconds)
              ease: "linear",
            },
          },
        }}
        className="flex space-x-4"
      >
        {firstRow.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            className="flex-shrink-0 w-[480px] max-h-[212px]"
          >
            <FeedbackCard {...card} />
          </motion.div>
        ))}

        {/* Duplicate the first row to create a seamless loop */}
        {firstRow.map((card) => (
          <div
            key={`duplicate-${card.id}`}
            className="flex-shrink-0 w-[480px] max-h-[212px]"
          >
            <FeedbackCard {...card} />
          </div>
        ))}
      </motion.div>

      {/* Second Row - Moving Left (Slower) */}
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: [0, 1500],
          transition: {
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 65, // Slightly different speed for visual interest
              ease: "linear",
            },
          },
        }}
        className="flex space-x-4 mt-6"
      >
        {secondRow.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index + 0.5 }}
            className="flex-shrink-0 w-[480px]"
          >
            <FeedbackCard {...card} />
          </motion.div>
        ))}

        {/* Duplicate the second row to create a seamless loop */}
        {secondRow.map((card) => (
          <div key={`duplicate-${card.id}`} className="flex-shrink-0 w-[480px]">
            <FeedbackCard {...card} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeedbackSection;
