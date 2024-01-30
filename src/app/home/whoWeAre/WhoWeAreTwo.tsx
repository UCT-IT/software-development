import { strings } from "@/app/assets/locales/locales";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const WhoWeAreTwo = () => {
  const localeText = strings.home.whoWeAreTwo;
  return (
    <React.Fragment>
      <div className="responsive-container pb-32 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[40px] xl:gap-x-[80px] ">
        <div className="space-y-4 mb-5 lg:mb-0 flex flex-col items-center lg:block text-center lg:text-left md:px-10 lg:px-0">
          <h6 className="text-primary bg-[#8000ff1a] inline py-[6px] px-4 rounded-md font-medium text-lg">
            {localeText.subtitle}
          </h6>
          <h2 className="text-secondary font-bold text-[40px] md:text-[50px] lg:text-[80px] tracking-tighter py-[10px] leading-[1.1em]">
            {localeText.title}
          </h2>
          <p className="text-textColor text-lg font-medium tracking-tighter">
            {localeText.description}
          </p>
          <button
            className="border-[1px] border-primary bg-primary hover:bg-white text-white hover:text-secondary 
            text-lg font-medium rounded-[30px] py-3 px-7 transition-all duration-300 flex items-center gap-10"
          >
            <Link href="#">{localeText.btnText}</Link>
            <FaCircle className="w-2 h-2" />
          </button>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-[30px] relative">
          <div className="bg-whoWeAre-gradient absolute top-[62px] bottom-[37%] right-0 left-auto w-[530px] h-[530px] rounded-[500px] -z-10 blur-[180px]"></div>
          {localeText.cards.map((item, index) => (
            <div key={index} className={`bg-white rounded-lg flex flex-col`}>
              <div className="pt-5 px-5 space-y-6 flex-1">
                <div className="bg-[#8000ff12] border-[1px] border-[#8000ff33] rounded p-3 inline-block">
                  <Image
                    src={item.icon}
                    alt={item.iconAltText}
                    className="w-7 h-7"
                    width={1000}
                    height={1000}
                  ></Image>
                </div>
                <h3 className="text-secondary hover:text-primary text-2xl font-bold transition-all duration-200 whitespace-pre-line">
                  <Link href="#">{item.title}</Link>
                </h3>
                <p className="text-textColor font-medium">{item.description}</p>
              </div>
              <button className="group w-full mt-8 bg-primary text-white rounded-b-lg flex items-center justify-between px-5 py-[18px] hover:bg-[#8000ff33] hover:text-secondary duration-300 ease-in-out border-[1px] border-[#8000ff33]">
                <span>{item.btnText}</span>
                <IoMdArrowForward className="w-5 h-5 rotate-45 group-hover:rotate-0 transition-all" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhoWeAreTwo;
