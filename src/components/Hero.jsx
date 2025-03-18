import { star1, hero, herovideo } from "../assets";
// import styles from "../style";

// const Hero = () => {
//   return (
//     <section
//       className={`flex flex-col ${styles.paddingY} items-center relative w-full h-auto`}
//     >
//       <div className="rounded-full sm:w-[320px] w-[220px] sm:h-[50px] h-[30px]  border border-purple-400  flex justify-center items-center">
//         <img src={star1} className=" sm:mr-4 mr-1" />
//         <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px] ">
//           New: Our AI integration just landed
//         </p>
//       </div>
//       <div className="relative z-10 text-center ">
//         <h1 className="flex-1 font-roboto font-semibold mt-4 sm:text-[70px] text-[30px] text-gradient1 ss:leading-[100px] leading-[35px] text-center ">
//           Think better with Reflect
//         </h1>
//         <p className={`${styles.paragraph}  mt-1 items-center `}>
//           Never miss a note, idea or connection.
//         </p>
//       </div>
//       <div className="w-full h-full relative">
//         <img
//           src={hero}
//           className="w-full h-full absolute bottom-11 left-0 z-0 object-cover"
//           alt="Hero Background"
//         />

//         <img
//           src={herovideo}
//           className="relative z-1 top-20 sm:top-40 md:top-60 lg:top-80 mx-auto"
//           alt="Hero Video"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;
("use client");
import { motion } from "framer-motion";

// Simulating the imports from your code

// Simulating styles object
const styles = {
  paddingY: "py-6 md:py-16",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mx-auto",
};

const Hero = () => {
  return (
    <section
      className={`flex flex-col ${styles.paddingY} items-center relative w-full h-auto`}
    >
      <motion.div
        className="rounded-full sm:w-[320px] w-[220px] sm:h-[50px] h-[30px] border border-purple-400 flex justify-center items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={star1}
          className="sm:mr-4 mr-1"
          animate={{
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
        <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[9px]">
          New: Our AI integration just landed
        </p>
      </motion.div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="flex-1 font-roboto font-semibold mt-4 sm:text-[70px] text-[30px] text-gradient1 ss:leading-[100px] leading-[35px] text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Think better with Reflect
        </motion.h1>

        <motion.p
          className={`${styles.paragraph} mt-1 items-center`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Never miss a note, idea or connection.
        </motion.p>
      </motion.div>

      <div className="w-full h-full relative">
        <motion.img
          src={hero}
          className="w-full h-full absolute bottom-11 left-0 z-0 object-cover"
          alt="Hero Background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        <motion.img
          src={herovideo}
          className="relative z-1 top-20 sm:top-40 md:top-60 lg:top-80 mx-auto"
          alt="Hero Video"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.8,
          }}
          whileInView={{
            y: [0, -8, 0],
            transition: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
