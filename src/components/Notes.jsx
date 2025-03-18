// import styles from "../style";
// import { notesbackground } from "../assets";
// import { feedback2 } from "../constans";
// import NotesServiceCarde from "./NotesServiceCarde";
// const Notes = () => {
//   return (
//     <section
//       className={`flex flex-col ${styles.paddingY} mt-10 items-center relative w-full h-auto`}
//     >
//       <div className="rounded-full sm:w-[120px] w-[100px] sm:h-[50px] h-[30px]  border border-purple-400  flex justify-center items-center">
//         <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px] ">
//           Reflect AI
//         </p>
//       </div>
//       <div className="relative z-10 flex flex-col items-center justify-center text-center ">
//         <h1 className="flex-1 font-roboto font-semibold mt-4 text-[25px] sm:text-[70px] md:text-[40px] text-gradient1 ss:leading-[80px] leading-[35px] text-center ">
//           Notes with an AI assistant
//         </h1>
//         <p
//           className={`${styles.paragraph}  text-[10px] sm:text-[18px] md:text-[12px]  mb-20 text-center  max-w-[570px] `}
//         >
//           Reflect uses GPT-4 and Whisper from OpenAI to improve your writing,
//           organize your thoughts, and act as your intellectual thought partner.
//         </p>
//       </div>
//       <div></div>
//       <div className=" w-full  h-full  relative">
//         <img
//           src={notesbackground}
//           className="relative z-0 sm:bottom-80   bottom-20   mx-auto"
//           alt="Hero Video"
//         />
//       </div>
//       <div className="flex flex-col items-center justify-center w-full relative z-[2] mt-15 sm:mt-[-600px]">
//         <div>
//           <h4 className=" flex-1 font-roboto font-semibold mt-6 mb-6 sm:text-[30px] text-[20px] text-gradient1 ss:leading-[100px] leading-[35px] text-center ">
//             What can you do with Reflect AI?
//           </h4>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 sm:gap-y-8 w-full place-items-center">
//           {feedback2.slice(0, 3).map((card) => (
//             <NotesServiceCarde key={card.id} {...card} />
//           ))}

//           {/* Second Row (2 Items) */}
//           <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-wrap justify-center gap-x-4 gap-y-6">
//             {feedback2.slice(3, 5).map((card) => (
//               <NotesServiceCarde key={card.id} {...card} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Notes;
"use client";
import { motion } from "framer-motion";
import styles from "../style";
import { notesbackground } from "../assets";
import { feedback2 } from "../constans";
import NotesServiceCarde from "./NotesServiceCarde";

const Notes = () => {
  return (
    <section
      className={`flex flex-col ${styles.paddingY} mt-10 items-center relative w-full h-auto`}
    >
      <motion.div
        className="rounded-full sm:w-[120px] w-[100px] sm:h-[50px] h-[30px] border border-purple-400 flex justify-center items-center"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]">
          Reflect AI
        </p>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="flex-1 font-roboto font-semibold mt-4 text-[25px] sm:text-[70px] md:text-[40px] text-gradient1 ss:leading-[80px] leading-[35px] text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Notes with an AI assistant
        </motion.h1>

        <motion.p
          className={`${styles.paragraph} text-[10px] sm:text-[18px] md:text-[12px] mb-20 text-center max-w-[570px]`}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Reflect uses GPT-4 and Whisper from OpenAI to improve your writing,
          organize your thoughts, and act as your intellectual thought partner.
        </motion.p>
      </motion.div>

      <div></div>

      <div className="w-full h-full relative">
        <motion.img
          src={notesbackground}
          className="relative z-0 sm:bottom-80 bottom-20 mx-auto"
          alt="Hero Video"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />
      </div>

      <motion.div
        className="flex flex-col items-center justify-center w-full relative z-[2] mt-15 sm:mt-[-600px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div>
          <motion.h4
            className="flex-1 font-roboto font-semibold mt-6 mb-6 sm:text-[30px] text-[20px] text-gradient1 ss:leading-[100px] leading-[35px] text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            What can you do with Reflect AI?
          </motion.h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-center">
          {/* First Row (3 Items) */}
          {feedback2.slice(0, 3).map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <NotesServiceCarde {...card} />
            </motion.div>
          ))}

          {/* Second Row (2 Items) - centered across full width */}
          <motion.div
            className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-wrap justify-center gap-8 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          >
            {feedback2.slice(3, 5).map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.0 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <NotesServiceCarde {...card} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Notes;
