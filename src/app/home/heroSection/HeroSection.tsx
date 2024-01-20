import React from "react";
import heroIcon from "../../../../public/images/home/hero/heroIcon.svg";
import img1 from "../../../../public/images/home/hero/img1.webp";
import img2 from "../../../../public/images/home/hero/img2.webp";
import img3 from "../../../../public/images/home/hero/img3.webp";
import Image from "next/image";
import ImageGallery from "@/app/components/imageGallery/ImageGallery";

const HeroSection = () => {
  const images = [img1, img2, img3];
  return (
    <div
      className={`w-full bg-gradient-to-t from-purple-50 to-transparent py-24`}
    >
      <div className="responsive-container lg:flex lg:justify-between relative">
        <div>
          <h1 className="text-4xl lg:text-8xl font-bold">
            <span className="text-secondary flex gap-3 items-center">
              <Image
                className="w-12 lg:w-[103px] lg:h-[69px]"
                alt="hero icon"
                src={heroIcon}
              />
              Unlock Your
            </span>
            <span className="text-primary">Digital Potential</span>
          </h1>
          <p className="font-bold text-secondary lg:text-[18px] mt-7">
            Your one-stop digital software solutions company. At Tech, we thrive
            <br />
            on transforming your ideas into cutting-edge digital realities.
          </p>
        </div>
        <div className="flex items-end gap-3 mt-7 lg:mt-0">
          <button className="px-7 py-[15px] border-[1px] border-primary transition-all hover:bg-white hover:text-primary bg-primary text-white rounded-full capitalize font-medium">
            start a project
          </button>
          <button className="px-7 py-[15px] border-[1px] border-primary transition-all bg-white hover:bg-primary hover:text-white  text-primary rounded-full capitalize font-medium">
            our work
          </button>
        </div>
      </div>
      <ImageGallery images={images} />
    </div>
  );
};

export default HeroSection;
