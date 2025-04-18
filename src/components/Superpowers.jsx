"use client";

import { superpowers } from "../assets";
import styles from "../style";
import SuperpowersCard from "./SuperpowersCard";
import { feedback3 } from "../constans";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Superpowers = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      ref={ref}
      className={`flex flex-col items-center w-full mt-[3rem] sm:mt-[5rem] overflow-hidden`}
    >
      <div className="relative inset-0 flex justify-center items-center w-full h-auto sm:h-auto">
        <motion.div
          style={{ opacity, scale }}
          className="relative inset-0 flex justify-center items-center w-full"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={superpowers}
            className="object-cover "
            alt="Hero Background"
          />

          {/* Heading and Subtext */}
          <div className="absolute bottom-32 sm:bottom-40 z-10 text-center flex flex-col items-center px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-full sm:w-[200px] w-[150px] sm:h-[40px] h-[30px] border border-purple-400 flex justify-center items-center"
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
              Mirror the way your mind works by associating notes through
              backlinks. Reflect builds you a second brain that you can
              reference anytime.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative z-10 flex flex-wrap justify-center items-center w-full feedback-container px-4 sm:px-0 gap-4 sm:gap-8"
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
