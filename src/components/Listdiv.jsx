import React from "react";
import { icondot } from "../assets";
import styles from "../style";
import { priceList } from "../constans";
const Listdiv = ({ content, index }) => {
  return (
    <div className={`flex flex-row items-center mt-5`}>
      <img src={icondot} className="mr-5 w-[24px] h-[24px]" alt="icon dot" />
      <p className="font-inter font-normal sm:text-[16px] text-[12px] leading-[30px] text-[#F4F0FF]">
        {content}
      </p>
    </div>
  );
};

export default Listdiv;
