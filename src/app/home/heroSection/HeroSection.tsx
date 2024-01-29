import React from "react";
import heroIcon from "../../../../public/images/home/hero/heroIcon.svg";
import img1 from "../../../../public/images/home/hero/img1.webp";
import img2 from "../../../../public/images/home/hero/img2.webp";
import img3 from "../../../../public/images/home/hero/img3.webp";
import Image from "next/image";
import ImageGallery from "@/app/components/imageGallery/ImageGallery";
import { strings } from "@/app/assets/locales/locales";

const HeroSection = () => {
  const images = [img1, img2, img3];
  const localetext = strings.home.hero;
  const altText = strings.home.hero.altText;
  return (
    <div
      className={`w-full py-24 h-auto relative bg-cover bg-no-repeat bg-center`}
      style={{ backgroundImage: "url('/images/home/hero/heroBg.svg')" }}
    >
      <div className=" bg-gradient-to-t from-purple-100 to-transparent blur-[180px] -z-10 w-full h-full absolute top-0 left-0"></div>
      <div className="responsive-container lg:flex lg:justify-between relative animate-fadeIn">
        <div>
          <h1 className="text-4xl lg:text-8xl font-bold">
            <span className="text-secondary flex gap-3 items-center">
              <Image
                className="w-12 lg:w-[103px] lg:h-[69px]"
                alt={altText.logo}
                src={heroIcon}
              />
              {localetext.title.text1}
            </span>
            <span className="text-primary"> {localetext.title.text2}</span>
          </h1>
          <p className="font-bold text-secondary lg:text-[18px] mt-7 md:whitespace-pre-line">
            {localetext.description}
          </p>
        </div>
        <div className="flex items-end gap-3 mt-7 lg:mt-0">
          <button className="px-7 py-[15px] border-[1px] border-primary transition-all hover:bg-white hover:text-primary bg-primary text-white rounded-full capitalize font-medium">
            {localetext.buttons.startProject}
          </button>
          <button className="px-7 py-[15px] border-[1px] border-primary transition-all bg-white hover:bg-primary hover:text-white  text-primary rounded-full capitalize font-medium">
            {localetext.buttons.work}
          </button>
        </div>
      </div>
      <ImageGallery images={images} />
    </div>
  );
};

export default HeroSection;
