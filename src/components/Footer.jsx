import React from "react";
import styles from "../style";
import { footer, logo } from "../assets";
import { footerLinks, socialMedia } from "../constans";
const Footer = () => {
  return (
    <section
      className={`relative flex flex-col ${styles.paddingY1} items-center  w-full h-auto`}
    >
      <div className="flex flex-col items-center text-center ">
        <div className="rounded-full sm:w-[130px] w-[120px]  sm:h-[40px] h-[40px] border border-purple-400 flex justify-center items-center mb-5 ">
          <p className="font-poppins font-normal text-purple-200 sm:text-[14px] text-[10px]">
            Integrations
          </p>
        </div>

        <h1 className="font-roboto font-semibold sm:text-[50px] text-[30px] text-gradient1 sm:leading-[60px] leading-[30px] text-center">
          <span className="block text-gradient1">Learn how to take great</span>
          <span className="block text-gradient1">notes at our academy</span>
        </h1>
        <p
          className={`${styles.paragraph} text-[#EFEDFD] text-opacity-70 mt-2 max-w-[300px] sm:text-[16px] text-[13px]`}
        >
          Master the principles of note-taking in Reflect's free online Academy.
        </p>
      </div>

      {/* image */}
      <div className="w-[2000px] w-full">
        <img src={footer} className="w-[2000px] h-[763px]" />
        <div
          className={`absolute bottom-16  bg-[#030014] w-full h-auto ${styles.paddingY} `}
        >
          <div className="absolute z-[3] left-1/2 top-1/2 w-[50%] h-[50%] rounded-full  transform -translate-x-1/2 -translate-y-1/2  bg-gradient-to-r from-[rgba(147,130,255,0.08)] to-[rgba(147,130,255,0.5)] blur-[750px]" />
          <div
            className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
          >
            <div className="flex-1 flex flex-col justify-start ">
              <div className="flex-1 flex flex-row justify-start items-center">
                <img src={logo} className="w-[36px] h-[36px] object-contain" />
                <h3 className={`text-white ml-4 text-[1rpx]`}>Reflect</h3>
              </div>
              <div className="flex flex-row md:mt-40 mt-6">
                {socialMedia.map((social, index) => (
                  <img
                    key={social.id}
                    src={social.icon}
                    className={`w-[21px] h-[21px] object-contain cursor-pointer opacity-30 hover:text-white hover:opacity-100 ${
                      index !== socialMedia.length - 1 ? "mr-6" : "mr-0 "
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              {footerLinks.map((footerLink) => (
                <div
                  key={footerLink.key}
                  className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                >
                  <h4 className="font-inter font-medium text-[15px] leading-[27px] text-white">
                    {footerLink.title}
                  </h4>
                  <ul className="list-none mt-4">
                    {footerLink.links.map((link, index) => (
                      <li
                        key={link.name}
                        className={`font-inter font-normal text-[14px] leading-[24px] text-[#EFEDFD] opacity-60 hover:text-white hover:opacity-100 cursor-pointer ${
                          index !== footerLink.links.length - 1
                            ? "mb-4"
                            : "mb-0 "
                        }`}
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <div className="flex-1 flex flex-col justify-start ">
              <h3 className={`text-gradient1 text-[23px] `}>
                Join our newsletter
              </h3>
              <p className="font-poppins font-normal mt-2 text-[14px] text-[#EFEDFD] opacity-60 leading-[27px]">
                Keep up to date with everything Reflect
              </p>
            </div>

            <div className="flex sm:flex-row flex-col justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="sm:mt-0 mt-4 w-[296px] h-[38px] border border-[#EFEDFD] border-opacity-30 rounded-md text-base  mr-8 py-3 px-4 bg-[#030014]"
              />
              <button className="sm:mt-0 mt-4 rounded-[8px] text-[14px] text-white sm:w-[99px] w-[99px] sm:h-[38px] h-[40px] border border-white border-opacity-30 flex justify-center items-center bg-black-gradient-2 bg-opacity-30">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between items-center mt-6 md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <div className="flex-1 flex flex-row justify-start items-center">
              <p className="font-poppins font-normal text-center text-[14px] leading-[27px] opacity-60 text-white">
                Privacy Policy
              </p>
              <p className="font-poppins font-normal text-center text-[14px] ml-4 opacity-60 leading-[27px] text-white">
                Terms of Conditions
              </p>
            </div>
            <p className="font-poppins font-normal text-center text-[14px] opacity-60  leading-[27px] text-white">
              Reflect App, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
