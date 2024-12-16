import React from "react";
import styles from "../style";
import { love } from "../assets";

import { feedbackclint } from "../constans";

import FeedbackSection from "./FeedbackSection";
const Testimonials = () => {
  return (
    <section
      className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-auto h-full`}
    >
      <div className="absolute sm:top-[250px] top-[160px] w-full flex justify-center items-center sm:h-[400px] h-[250px]">
        <img
          src={love}
          className="w-full sm:w-[812px] w-[300px] sm:h-[431px] h-[280px]     object-cover sm:object-contain"
          alt="Hero Background"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center mt-[200px] sm:mt-[250px] ">
        {/* Badge */}
        <div className="rounded-full sm:w-[100px] w-[120px] sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center">
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
            Wall of love
          </p>
        </div>

        {/* Heading and Subtext */}
        <h1 className="font-roboto font-semibold sm:text-[50px] text-[30px] text-gradient1 sm:leading-[60px] leading-[30px] text-center">
          Loved by thinkers
        </h1>
        <p
          className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[580px] text-[13px] sm:text-[16px]`}
        >
          Here’s what people are saying about us
        </p>
      </div>
      <FeedbackSection feedbackclint={feedbackclint} />
      {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedbackclint.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div> */}
    </section>
  );
};

export default Testimonials;
