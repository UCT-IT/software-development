"use client";
import { strings } from "@/app/assets/locales/locales";
import React, { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { IoMdArrowForward } from "react-icons/io";
import logo from "../../../../public/images/icons/logo.webp";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const localeText = strings.navbar;
  return (
    <React.Fragment>
      <div className="lg:hidden">
        <CgMenuRight
          className="text-3xl text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden absolute top-0 left-0 h-screen z-50 w-3/4 bg-white text-primary text-[18px] transition-transform ease-in-out duration-500 space-y-10 px-5 lg:px-0 pt-5`}
        >
          <div className="flex justify-between items-center">
            <Image
              className="w-16 h-16"
              src={logo}
              alt={localeText.logoAltText}
            ></Image>
            <CgClose
              className="text-3xl text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <ul className="space-y-3">
            <li className="text-secondary hover:text-primary">
              {localeText.navs.home.navTitle}
            </li>
            <DropdownMenu />
            <li className="text-secondary hover:text-primary">
              {localeText.navs.services.navTitle}
            </li>
            <li className="text-secondary hover:text-primary">
              {localeText.navs.caseStudies.navTitle}
            </li>
          </ul>
          <button className="group bg-primary text-white flex items-center gap-4 px-7 py-4 hover:bg-white hover:text-secondary duration-500 ease-in-out">
            <span>{localeText.buttonText}</span>
            <IoMdArrowForward className="w-5 h-5 rotate-45 group-hover:rotate-0 transition-all" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNavbar;
