import React from "react";
import { information } from "../assets";
import styles from "../style";

import { feedback4 } from "../constans";
import InformationCard from "./InformationCard";
const Information = () => {
  return (
    <section
      className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-auto h-full sm:mt-[100px]`}
    >
      {/* Image Section */}
      <div className="relative w-full h-full sm:h-[600px] flex  justify-center items-center">
        <img
          src={information}
          className="sm:w-[784px] sm:h-[784px] h-[500px] object-cover sm:object-contain"
          alt="Hero Background"
        />
      </div>

      {/* Text Section */}
      <div className="relative z-10 sm:bottom-[250px] bottom-[200px] flex flex-col items-center text-center ">
        {/* Badge */}
        <div className="rounded-full sm:w-[200px] w-[150px] sm:h-[40px] h-[30px] border border-purple-400 flex justify-center items-center mb-4">
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]">
            Research and reading
          </p>
        </div>

        {/* Heading and Subtext */}
        <h1 className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 ss:leading-[100px] leading-[35px]">
          Never lose information
        </h1>
        <p
          className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[580px]`}
        >
          Collect your web snippets, Kindle highlights and important links – all
          in one place. Then quickly find them again from any device.
        </p>
      </div>

      {/* Feedback Section */}
      <div className="relative z-10 bottom-[100px] flex flex-wrap justify-center items-center w-full">
        {feedback4.map((card) => (
          <InformationCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Information;
