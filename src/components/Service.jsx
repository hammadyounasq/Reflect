// import { feedback } from "../constans";
// import styles from "../style";
// import ServiceCard from "./ServiceCard";
// const Service = () => {
//   return (
//     <section
//       className={`${styles.paddingY} ${styles.flexCenter} flex-col relative sm:mt-20 mt-0`}
//     >
//       <div className="flex flex-wrap  justify-center items-center w-full feedback-container">
//         {feedback.map((card) => (
//           <ServiceCard key={card.id} {...card} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Service;
"use client";
import { motion } from "framer-motion";
import { feedback } from "../constans";
import styles from "../style";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <motion.section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative sm:mt-20 mt-0`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-wrap justify-center items-center w-full feedback-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {feedback.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.1, // Staggered animation
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <ServiceCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Service;
