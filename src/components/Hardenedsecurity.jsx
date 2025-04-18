"use client";
import { motion } from "framer-motion";
import { imagebackground, icon } from "../assets";

const Hardenedsecurity = () => {
  return (
    <section
      className={`relative flex items-center justify-center w-full h-screen overflow-hidden`}
    >
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 w-full h-full z-10"
      >
        <motion.img
          src={imagebackground}
          className="w-full h-full object-cover"
          alt="Hero Background"
          initial={{ filter: "blur(5px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.img
          src={icon}
          className="w-[60px] h-auto"
          alt="Hero Background"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-full sm:w-[100px] w-[100px] sm:h-[40px] h-[30px] border border-purple-400 flex justify-center items-center sm:mb-10 mb-4 sm:mt-4 mt-4 backdrop-blur-sm"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]"
          >
            Encryption
          </motion.p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 ss:leading-[50px] leading-[35px]"
        >
          Hardened security
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className={`font-roboto font-normal text-dimWhite text-[14px] leading-[30.8px] text-[#EFEDFD] text-opacity-70 mt-2 max-w-[380px]`}
        >
          The contents of your notes are end-to-end encrypted. No one else can
          read them (not even us).
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hardenedsecurity;
