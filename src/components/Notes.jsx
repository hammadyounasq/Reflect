import React from "react";
import styles from "../style";
import { notesbackground } from "../assets";
import { feedback2 } from "../constans";
import ServiceCard from "./ServiceCard";
import NotesServiceCarde from "./NotesServiceCarde";
const Notes = () => {
  return (
    <section
      className={`flex flex-col ${styles.paddingY} mt-10 items-center relative w-full h-auto`}
    >
      <div className="rounded-full sm:w-[120px] w-[100px] sm:h-[50px] h-[30px]  border border-purple-400  flex justify-center items-center">
        <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px] ">
          Reflect AI
        </p>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center ">
        <h1 className="flex-1 font-roboto font-semibold mt-4 text-[25px] sm:text-[70px] md:text-[40px] text-gradient1 ss:leading-[80px] leading-[35px] text-center ">
          Notes with an AI assistant
        </h1>
        <p
          className={`${styles.paragraph}  text-[10px] sm:text-[18px] md:text-[12px]  mb-20 text-center  max-w-[570px] `}
        >
          Reflect uses GPT-4 and Whisper from OpenAI to improve your writing,
          organize your thoughts, and act as your intellectual thought partner.
        </p>
      </div>
      <div></div>
      <div className=" w-full  h-full  relative">
        <img
          src={notesbackground}
          className="relative z-0 sm:bottom-80   bottom-20   mx-auto"
          alt="Hero Video"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full relative z-[2] mt-15 sm:mt-[-600px]">
        <div>
          <h4 className=" flex-1 font-roboto font-semibold mt-6 mb-6 sm:text-[30px] text-[20px] text-gradient1 ss:leading-[100px] leading-[35px] text-center ">
            What can you do with Reflect AI?
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 sm:gap-y-8 w-full place-items-center">
          {feedback2.slice(0, 3).map((card) => (
            <NotesServiceCarde key={card.id} {...card} />
          ))}

          {/* Second Row (2 Items) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-wrap justify-center gap-x-4 gap-y-6">
            {feedback2.slice(3, 5).map((card) => (
              <NotesServiceCarde key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notes;
