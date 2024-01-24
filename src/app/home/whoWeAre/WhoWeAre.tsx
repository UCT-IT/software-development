import React from "react";
import { strings } from "@/app/assets/locales/locales";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";

const WhoWeAre = () => {
  const localeText = strings.home.whoWeAreOne;
  return (
    <React.Fragment>
      <div className="responsive-container py-32 grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div className="space-y-4">
          <h6 className="text-primary bg-[#8000ff1a] inline py-[6px] px-4 rounded-md font-medium text-lg">
            {localeText.subTitle}
          </h6>
          <h2 className="text-secondary font-bold text-[40px] md:text-[80px] tracking-tighter py-[10px] leading-[1.1em]">
            {localeText.title}
          </h2>
          <p className="text-textColor text-lg font-medium tracking-tighter">
            {localeText.description}
          </p>
        </div>
        <div>
          <div className="bg-whoWeAre-image bg-cover bg-center rounded-lg h-80 pl-5 pb-5 flex items-end">
            <button
              className="border-[1px] border-primary bg-primary hover:bg-white text-white hover:text-secondary 
            text-lg font-medium rounded-[30px] py-3 px-7 transition-all duration-300 flex items-center gap-10"
            >
              <Link href="#">{localeText.btnText}</Link>
              <FaCircle className="w-2 h-2" />
            </button>
          </div>
          <div className="flex items-center flex-col md:flex-row pt-6 md:divide-x-2">
            <div className="md:pr-[30px] text-center md:text-left">
              <h2 className="text-primary text-5xl font-bold mb-4">
                {localeText.experience.years}
              </h2>
              <p className="text-textColor text-lg font-medium mb-3 md:mb-0">
                {localeText.experience.text}
              </p>
            </div>
            <div className="md:pl-[30px] text-center md:text-left">
              <h2 className="text-primary text-5xl font-bold mb-4">
                {localeText.awards.number}
              </h2>
              <p className="text-textColor text-lg font-medium">
                {localeText.awards.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhoWeAre;
