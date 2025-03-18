import styles from "../style";
import { meetingsbackground, calender } from "../assets";

const Meeting = () => {
  return (
    <section
      className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-[1200px] h-[800px]`}
    >
      <div className="absolute top-0 w-full flex justify-center items-center sm:h-[400px] h-[250px]">
        <img
          src={meetingsbackground}
          className="w-full sm:w-[812px] sm:h-[431px]  h-full object-cover sm:object-contain"
          alt="Hero Background"
        />
      </div>
      {/* Text in Center */}
      <div className="relative z-10 flex flex-col items-center text-center mt-[200px] sm:mt-[250px] ">
        {/* Badge */}
        <div className="rounded-full sm:w-[100px] w-[120px] sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center">
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
            Meetings
          </p>
        </div>
        {/* Heading and Subtext */}
        <h1 className="font-roboto  font-semibold sm:text-[50px] text-[35px] text-gradient1 sm:leading-[60px] leading-[40px] text-center">
          <span className="block">Get more out</span>
          <span className="block">of your meetings</span>
        </h1>
        <p
          className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[580px] text-[10px] sm:text-[16px]`}
        >
          Keep track of all your meetings and what was discussed. Import events
          quickly with our Google Calendar and Outlook integrations.
        </p>
      </div>

      {/* Second Image on Bottom */}
      <div className="absolute bottom-20 w-full flex justify-center items-center sm:h-[431px] h-[250px]">
        <img
          src={calender}
          className="w-full sm:w-[812px] sm:h-[431px] h-full "
          alt="Calendar Image"
        />
      </div>
    </section>

    // <section
    //   className={`relative flex flex-col ${styles.paddingY} items-center w-full sm:h-[1000px] h-full`}
    // >
    //   {/* First Image on Top */}
    //   <div className="absolute top-0 w-full flex justify-center items-center sm:h-[400px] h-[300px]">
    //     <img
    //       src={meetingsbackground}
    //       className="w-[812px] h-[431px] object-cover sm:object-contain"
    //       alt="Hero Background"
    //     />
    //   </div>

    //   {/* Text in Center */}
    //   <div className="relative z-10 flex flex-col items-center text-center mt-[210px]">
    //     {/* Badge */}
    //     <div className="rounded-full sm:w-[100px] w-[150px] sm:h-[40px] h-[30px] border border-purple-400 flex justify-center items-center mb-4">
    //       <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]">
    //         Meetings
    //       </p>
    //     </div>

    //     {/* Heading and Subtext */}
    //     <h1 className="font-roboto font-semibold sm:text-[50px] text-[25px] text-gradient1 sm:leading-[60px] leading-[35px] text-center">
    //       <span className="block">Get more out</span>
    //       <span className="block">of your meetings</span>
    //     </h1>
    //     <p
    //       className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[580px]`}
    //     >
    //       Keep track of all your meetings and what was discussed. Import events
    //       quickly with our Google Calendar and Outlook integrations.
    //     </p>
    //   </div>

    //   {/* Second Image on Bottom */}
    //   <div className="absolute bottom-0 w-full flex justify-center items-center sm:h-[400px] h-[300px]">
    //     <img
    //       src={calender}
    //       className="w-[812px] h-[431px] object-cover sm:object-contain"
    //       alt="Calendar Image"
    //     />
    //   </div>
    // </section>
  );
};

export default Meeting;
