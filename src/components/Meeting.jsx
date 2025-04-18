"use client";

import styles from "../style";
import { meetingsbackground, calender } from "../assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Meeting = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center w-full sm:h-auto h-auto"
    >
      {/* Top Background Image */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
        className="absolute top-0 w-full flex justify-center items-center sm:h-[400px] h-[250px]"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 1.2 }}
          src={meetingsbackground}
          className="w-full sm:w-[812px] sm:h-[431px] h-full object-cover sm:object-contain"
          alt="Hero Background"
        />
      </motion.div>

      {/* Text in Center */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 flex flex-col items-center text-center mt-[200px] sm:mt-[250px]"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-full sm:w-[100px] w-[120px] sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center"
        >
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
            Meetings
          </p>
        </motion.div>

        {/* Heading and Subtext */}
        <h1 className="font-roboto font-semibold sm:text-[50px] text-[35px] text-gradient1 sm:leading-[60px] leading-[40px] text-center">
          <span className="block">Get more out</span>
          <span className="block">of your meetings</span>
        </h1>
        <p
          className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[580px] text-[10px] sm:text-[16px]`}
        >
          Keep track of all your meetings and what was discussed. Import events
          quickly with our Google Calendar and Outlook integrations.
        </p>
      </motion.div>

      {/* Bottom Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="pt-[10rem] w-full flex justify-center items-center sm:h-[431px] h-[250px]"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 1.2, delay: 0.8 }}
          src={calender}
          className="w-full sm:w-[812px] sm:h-[431px] h-full"
          alt="Calendar Image"
        />
      </motion.div>
    </section>
  );
};

export default Meeting;
