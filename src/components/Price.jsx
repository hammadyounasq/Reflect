import React from "react";
import { pricebackground } from "../assets";
import styles from "../style";
import Listdiv from "./Listdiv";
import { priceList } from "../constans";
const Price = () => {
  return (
    <section
      className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-auto h-full`}
    >
      <div className="relative z-10 flex flex-col items-center text-center mt-[200px] sm:mt-[250px]">
        <div className="rounded-full sm:w-[130px] w-[120px]  sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center mb-5 ">
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
            Get access
          </p>
        </div>

        <h1 className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 sm:leading-[60px] leading-[30px] text-center">
          <span className="block text-gradient1">
            We like keeping things simple
          </span>
          <span className="block text-gradient1">One plan one price.</span>
        </h1>
      </div>
      <div className="relative z-10 flex flex-row items-center  justify-start mt-10">
        <h4 className="font-roboto font-semibold sm:text-[50px] text-[40px] text-pinkgradient2  sm:leading-[60px] leading-[30px] text-center mr-4">
          $10
        </h4>
        <p className=" font-inter font-normal sm:text-[16px] text-[13px] sm:leading-[30px] leading-[20px] text-dimWhite opacity-70">
          <span className="block ">/month</span>
          <span className="block ">(if billed annually)</span>
        </p>
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="relative z-10 grid sm:grid-cols-2 grid-cols-1  sm:gap-x-10 gap-x-1  items-center w-full max-w-[800px]">
          {priceList.map((card, index) => (
            <Listdiv key={card.id} {...card} index={index} />
          ))}
        </div>
      </div>
      <div className="relative z-10 top-20 rounded-[10px] sm:w-[177px] w-[120px]  sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center  bg-dimpupple bg-opacity-30">
        <p className="font-poppins font-normal text-purple-100 sm:text-[14px] text-[10px]">
          Start your 14-day trial
        </p>
      </div>
      <div className=" w-full flex justify-center items-center sm:h-[431px] h-[250px]">
        <img
          src={pricebackground}
          className=" sm:w-[744px] w-full sm:h-[837px] h-full "
          alt="Calendar Image"
        />
      </div>
    </section>
  );
};

export default Price;
