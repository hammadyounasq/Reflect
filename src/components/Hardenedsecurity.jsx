import React from "react";
import { imagebackground, icon } from "../assets";
import styles from "../style";

const Hardenedsecurity = () => {
  return (
    <section
      className={`relative flex items-center justify-center ${styles.paddingY} w-full sm:h-screen h-[700px] sm:mt-[10px] `}
    >
      {/* Background Image */}
      <div className="absolute w-full h-full  sm:bottom-[40px]  left-0  z-10">
        <img
          src={imagebackground}
          className="w-full  object-cover sm:object-contain sm:h-full h-[650px]"
          alt="Hero Background"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <img src={icon} className="w-[60px] h-[80px]" alt="Hero Background" />
        <div className="rounded-full sm:w-[100px] w-[100px] sm:h-[40px] h-[30px] border border-purple-400 flex justify-center items-center sm:mb-10 mb-4  sm:mt-4 mt-4">
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]">
            Encryption
          </p>
        </div>

        <h1 className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 ss:leading-[50px] leading-[35px]">
          Hardened security
        </h1>
        <p
          className={`font-roboto font-normal text-dimWhite text-[14px] leading-[30.8px] text-[#EFEDFD] text-opacity-70 mt-2 max-w-[380px]`}
        >
          The contents of your notes are end-to-end encrypted. No one else can
          read them (not even us).
        </p>
      </div>
    </section>
  );
};

export default Hardenedsecurity;
