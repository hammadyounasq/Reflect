import React from "react";
import { star1, hero, herovideo } from "../assets";
import styles from "../style";

const Hero = () => {
  return (
    <section
      className={`flex flex-col ${styles.paddingY} items-center relative w-full h-auto`}
    >
      <div className="rounded-full sm:w-[320px] w-[220px] sm:h-[50px] h-[30px]  border border-purple-400  flex justify-center items-center">
        <img src={star1} className=" sm:mr-4 mr-1" />
        <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px] ">
          New: Our AI integration just landed
        </p>
      </div>
      <div className="relative z-10 text-center ">
        <h1 className="flex-1 font-roboto font-semibold mt-4 sm:text-[70px] text-[30px] text-gradient1 ss:leading-[100px] leading-[35px] text-center ">
          Think better with Reflect
        </h1>
        <p className={`${styles.paragraph}  mt-1 items-center `}>
          Never miss a note, idea or connection.
        </p>
      </div>
      <div className="w-full h-full relative">
        <img
          src={hero}
          className="w-full h-full absolute bottom-11 left-0 z-0 object-cover"
          alt="Hero Background"
        />

        <img
          src={herovideo}
          className="relative z-1 top-20 sm:top-40 md:top-60 lg:top-80 mx-auto"
          alt="Hero Video"
        />
      </div>
    </section>
  );
};

export default Hero;
