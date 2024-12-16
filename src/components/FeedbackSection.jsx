import React, { useState, useEffect } from "react";
import FeedbackCard from "./FeedbackCard";
import { testimonials } from "../assets";

const FeedbackSection = ({ feedbackclint }) => {
  // Split the array into two rows
  const firstRow = feedbackclint.slice(0, Math.ceil(feedbackclint.length / 2));
  const secondRow = feedbackclint.slice(Math.ceil(feedbackclint.length / 2));

  return (
    <div className="w-full h-auto overflow-hidden relative">
      <div className="w-full mb-6">
        <img
          src={testimonials}
          alt="Description of the image"
          className="w-full h-auto object-cover absolute z-10"
        />
      </div>
      {/* First Row - Moving Right */}
      <div className="flex space-x-4 animate-moveRight">
        {firstRow.map((card) => (
          <div key={card.id} className="flex-shrink-0 w-[480px] max-h-[212px]">
            <FeedbackCard {...card} />
          </div>
        ))}
      </div>

      {/* Second Row - Moving Left */}
      <div className="flex space-x-4 animate-moveLeft mt-6">
        {secondRow.map((card) => (
          <div key={card.id} className="flex-shrink-0 w-[480px]">
            <FeedbackCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
