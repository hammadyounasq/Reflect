import React from "react";
import { feedback } from "../constans";
import styles from "../style";
import ServiceCard from "./ServiceCard";
const Service = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative sm:mt-20 mt-0`}
    >
      <div className="flex flex-wrap  justify-center items-center w-full feedback-container">
        {feedback.map((card) => (
          <ServiceCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Service;
