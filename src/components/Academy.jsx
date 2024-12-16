import React from "react";
import { academybackground, Keys } from "../assets";
import styles from "../style";

const Academy = () => {
  return (
    <section
      className={` flex flex-col  items-center w-full  sm:h-[600px] h-[300px]`}
    >
      <div className="  flex flex-col items-center text-center ">
        <div className="rounded-full sm:w-[130px] w-[120px]  sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center mb-5 ">
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
            Integrations
          </p>
        </div>

        <h1 className="font-roboto font-semibold sm:text-[50px] text-[30px] text-gradient1 sm:leading-[60px] leading-[30px] text-center">
          <span className="block text-gradient1">Learn how to take great</span>
          <span className="block text-gradient1">notes at our academy</span>
        </h1>
        <p
          className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[300px] sm:text-[16px] text-[13px]`}
        >
          Master the principles of note-taking in Reflect's free online Academy.
        </p>
        <div className="mt-10 rounded-[10px] sm:w-[177px] w-[120px] sm:h-[40px] h-[40px] border border-white border-opacity-30 flex justify-center items-center bg-black-gradient-2 bg-opacity-30">
          <p className="font-poppins font-normal text-[#F4F0FF] sm:text-[14px] text-[10px]">
            See our values
          </p>
        </div>
        <div className="absolute  sm:w-full  w-full flex justify-center items-center sm:h-[400px] h-[300px]">
          <img
            src={academybackground}
            className=" sm:w-[896px] w-full sm:h-[640px] h-[270px] object-cover sm:object-contain"
            alt="Hero Background"
          />
        </div>
      </div>

      {/* Background Image */}

      <img
        src={Keys}
        className="mt-20 sm:mt-60 w-full sm:w-full h-auto sm:h-[30px] h-[50px] z-10"
        alt="Keys"
      />
    </section>
  );
};

export default Academy;
