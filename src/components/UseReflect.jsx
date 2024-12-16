import React from "react";
import { reflectbackground } from "../assets";
import styles from "../style";

import { feedback5 } from "../constans";
import UseReflectCard from "./UseReflectCard";
const UseReflect = () => {
  return (
    <section
      className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-auto h-full`}
    >
      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center text-center mt-[50px] sm:mt-[250px]">
        <div className="rounded-full sm:w-[130px] w-[120px]  sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center mb-5 ">
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
            Integrations
          </p>
        </div>

        <h1 className="font-roboto font-semibold sm:text-[50px] text-[30px] text-gradient1 sm:leading-[60px] leading-[30px] text-center">
          <span className="block text-gradient1">Use Reflect</span>
          <span className="block text-gradient1">with other apps</span>
        </h1>
      </div>

      {/* Background Image */}
      <div className="absolute sm:top-[53%] top-[50%] sm:w-full flex justify-center items-center sm:h-[400px] h-[200px]">
        <img
          src={reflectbackground}
          className="w-full sm:w-[812px] sm:h-[431px] h-full object-cover sm:object-contain"
          alt="Hero Background"
        />
      </div>

      {/* Grid Section */}
      <div className="relative z-10 top-2/2 sm:left-10 left-0  flex justify-center items-center w-full mt-8 sm:mt-16">
        <div className="grid grid-cols-2 gap-4 w-full max-w-[800px]">
          {feedback5.map((card, index) => (
            <div key={card.id}>
              <UseReflectCard {...card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>

    // <section
    //   className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-auto h-full `}
    // >
    //   <div className="relative z-10 flex flex-col items-center text-center mt-[200px] sm:mt-[250px] ">
    //     <div className="rounded-full sm:w-[130px] w-[120px] sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center">
    //       <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
    //         Integrations
    //       </p>
    //     </div>

    //     <h1 className="font-roboto font-semibold sm:text-[50px] text-[30px] text-gradient1 sm:leading-[60px] leading-[30px] text-center">
    //       <span className="block text-gradient1">Use Reflect</span>
    //       <span className="block text-gradient1">with other apps</span>
    //     </h1>
    //   </div>
    //   <div className="absolute top-0 w-full flex justify-center items-center sm:h-[400px] h-[250px]">
    //     <img
    //       src={reflectbackground}
    //       className="w-full sm:w-[812px] sm:h-[431px]  h-full object-cover sm:object-contain"
    //       alt="Hero Background"
    //     />
    //   </div>

    //   <div className="relative z-10 bottom-[100px] flex justify-center items-center w-full">
    //     <div className="grid grid-cols-2 gap-4 w-full max-w-[800px]">
    //       {feedback5.map((card, index) => (
    //         <div key={card.id}>
    //           <UseReflectCard {...card} index={index} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default UseReflect;
