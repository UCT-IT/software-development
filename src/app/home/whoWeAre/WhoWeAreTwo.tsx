import Link from "next/link";
import React from "react";
import { FaCircle, FaGlobe } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const WhoWeAreTwo = () => {
  return (
    <React.Fragment>
      <div className="responsive-container pb-32 grid grid-cols-3 gap-[80px]">
        <div className="space-y-4">
          <h6 className="text-primary bg-[#8000ff1a] inline py-[6px] px-4 rounded-md font-medium text-lg">
            Who we are
          </h6>
          <h2 className="text-secondary font-bold text-[40px] md:text-[50px] lg:text-[80px] tracking-tighter py-[10px] leading-[1.1em]">
            How we help you
          </h2>
          <p className="text-textColor text-lg font-medium tracking-tighter">
            Transparency, reliability, and outstanding customer experiences are
            at the core of our values. We take pride in fostering strong
            relationships with our clients, communicating openly at every stage
            of the development process.
          </p>
          <button
            className="border-[1px] border-primary bg-primary hover:bg-white text-white hover:text-secondary 
            text-lg font-medium rounded-[30px] py-3 px-7 transition-all duration-300 flex items-center gap-10"
          >
            <Link href="#">View More</Link>
            <FaCircle className="w-2 h-2" />
          </button>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-[30px]">
          <div className="pb-[50px]">
            <div>
              <div className="bg-white pt-5 px-5 rounded-t-lg space-y-6">
                <div className="text-primary bg-[#8000ff12] border-[1px] border-[#8000ff33] rounded p-3 inline-block">
                  <FaGlobe className="w-7 h-7" />
                </div>
                <h3 className="text-secondary hover:text-primary text-2xl font-bold transition-all duration-200">
                  <Link href="#">Custom Software Development</Link>
                </h3>
                <p className="text-textColor font-medium">
                  Tailor-made software solutions designed to align seamlessly
                  with your unique business needs and drive productivity to new
                  heights.
                </p>
              </div>
              <button className="group w-full mt-8 bg-primary text-white hidden lg:flex items-center justify-between px-5 py-[18px] hover:bg-[#8000ff33] hover:text-secondary duration-300 ease-in-out rounded-b-lg border-[1px] border-[#8000ff33]">
                <span>Learn More</span>
                <IoMdArrowForward className="w-5 h-5 rotate-45 group-hover:rotate-0 transition-all" />
              </button>
            </div>
            <div>
              <div className="bg-white pt-5 px-5 rounded-t-lg space-y-6">
                <div className="text-primary bg-[#8000ff12] border-[1px] border-[#8000ff33] rounded p-3 inline-block">
                  <FaGlobe className="w-7 h-7" />
                </div>
                <h3 className="text-secondary hover:text-primary text-2xl font-bold transition-all duration-200">
                  <Link href="#">Custom Software Development</Link>
                </h3>
                <p className="text-textColor font-medium">
                  Tailor-made software solutions designed to align seamlessly
                  with your unique business needs and drive productivity to new
                  heights.
                </p>
              </div>
              <button className="group w-full mt-8 bg-primary text-white hidden lg:flex items-center justify-between px-5 py-[18px] hover:bg-[#8000ff33] hover:text-secondary duration-300 ease-in-out rounded-b-lg border-[1px] border-[#8000ff33]">
                <span>Learn More</span>
                <IoMdArrowForward className="w-5 h-5 rotate-45 group-hover:rotate-0 transition-all" />
              </button>
            </div>
          </div>
          <div className="pt-[50px]">
            <div>
              <div className="bg-white pt-5 px-5 rounded-t-lg space-y-6">
                <div className="text-primary bg-[#8000ff12] border-[1px] border-[#8000ff33] rounded p-3 inline-block">
                  <FaGlobe className="w-7 h-7" />
                </div>
                <h3 className="text-secondary hover:text-primary text-2xl font-bold transition-all duration-200">
                  <Link href="#">Custom Software Development</Link>
                </h3>
                <p className="text-textColor font-medium">
                  Tailor-made software solutions designed to align seamlessly
                  with your unique business needs and drive productivity to new
                  heights.
                </p>
              </div>
              <button className="group w-full mt-8 bg-primary text-white hidden lg:flex items-center justify-between px-5 py-[18px] hover:bg-[#8000ff33] hover:text-secondary duration-300 ease-in-out rounded-b-lg border-[1px] border-[#8000ff33]">
                <span>Learn More</span>
                <IoMdArrowForward className="w-5 h-5 rotate-45 group-hover:rotate-0 transition-all" />
              </button>
            </div>
            <div>
              <div className="bg-white pt-5 px-5 rounded-t-lg space-y-6">
                <div className="text-primary bg-[#8000ff12] border-[1px] border-[#8000ff33] rounded p-3 inline-block">
                  <FaGlobe className="w-7 h-7" />
                </div>
                <h3 className="text-secondary hover:text-primary text-2xl font-bold transition-all duration-200">
                  <Link href="#">Custom Software Development</Link>
                </h3>
                <p className="text-textColor font-medium">
                  Tailor-made software solutions designed to align seamlessly
                  with your unique business needs and drive productivity to new
                  heights.
                </p>
              </div>
              <button className="group w-full mt-8 bg-primary text-white hidden lg:flex items-center justify-between px-5 py-[18px] hover:bg-[#8000ff33] hover:text-secondary duration-300 ease-in-out rounded-b-lg border-[1px] border-[#8000ff33]">
                <span>Learn More</span>
                <IoMdArrowForward className="w-5 h-5 rotate-45 group-hover:rotate-0 transition-all" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhoWeAreTwo;
