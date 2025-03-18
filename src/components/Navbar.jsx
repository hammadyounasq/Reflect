// import { useState } from "react";
// import { close, logo, menu } from "../assets";
// import { navLinks } from "../constans";
// import Button from "./Button";
// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   return (
//     <nav className="w-full flex py-6 justify-between item-center navbar ">
//       <div className="flex min-w-[150px] items-center">
//         <img src={logo} className=" w-[40px] h-[40px]" />
//         <h4 className=" font-roboto ml-4 font-medium md:text-[17px]  text-[14px] leading-[27px] text-white">
//           Reflect
//         </h4>
//       </div>

//       <div className="rounded-full md:w-[550px] w-[400px] h-[50px] sm:flex hidden border border-gray-500 flex justify-center items-center">
//         <ul className="flex justify-center items-center w-full h-full text-gray-300">
//           {navLinks.map((nav, index) => (
//             <li
//               key={nav.id}
//               className={`font-roboto font-normal  md:text-[14px] text-[12px] cursor-pointer hover:text-white transition-all ${
//                 index === navLinks.length - 1 ? "mr-0" : " md:mr-12 mr-8"
//               } text-white`}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex items-center sm:flex hidden ">
//         <h4 className=" font-roboto mr-4 ont-normal md:text-[17px] text-[14px] leading-[27px] text-white">
//           Login
//         </h4>
//         <Button />
//       </div>
//       {/* ---- */}
//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle((prev) => !prev)}
//         />
//         <div
//           className={`${
//             toggle ? "flex  flex-col  items-center" : "hidden"
//           } p-6 bg-black-gradient absolute top-20 z-[20] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="list-none flex flex-col  justify-end items-center flex-1">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-roboto font-normal cursor-pointer text-[16px] ${
//                   index === navLinks.length - 1 ? "mr-0" : "mb-4"
//                 } text-white `}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
//           <h4 className=" font-roboto mt-4 mb-4 font-normal text-[17px]  leading-[27px] text-white">
//             Login
//           </h4>
//           <Button />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constans";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      className="w-full flex py-6 justify-between item-center navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="flex min-w-[150px] items-center"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.img
          src={logo}
          className="w-[40px] h-[40px]"
          whileHover={{ rotate: 10, scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <motion.h4
          className="font-roboto ml-4 font-medium md:text-[17px] text-[14px] leading-[27px] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          Reflect
        </motion.h4>
      </motion.div>

      <motion.div
        className="rounded-full md:w-[550px] w-[400px] h-[50px] sm:flex hidden border border-gray-500 flex justify-center items-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ul className="flex justify-center items-center w-full h-full text-gray-300">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              className={`font-roboto font-normal md:text-[14px] text-[12px] cursor-pointer hover:text-white transition-all ${
                index === navLinks.length - 1 ? "mr-0" : "md:mr-12 mr-8"
              } text-white`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="items-center sm:flex hidden"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h4
          className="font-roboto mr-4 font-normal md:text-[17px] text-[14px] leading-[27px] text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Login
        </motion.h4>
        <Button />
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        className="sm:hidden flex flex-1 justify-end items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        />

        <AnimatePresence>
          {toggle && (
            <motion.div
              className="p-6 bg-black-gradient absolute top-20 z-[20] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <motion.li
                    key={nav.id}
                    className={`font-roboto font-normal cursor-pointer text-[16px] ${
                      index === navLinks.length - 1 ? "mr-0" : "mb-4"
                    } text-white`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </motion.li>
                ))}
              </ul>

              <motion.h4
                className="font-roboto mt-4 mb-4 font-normal text-[17px] leading-[27px] text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                Login
              </motion.h4>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
