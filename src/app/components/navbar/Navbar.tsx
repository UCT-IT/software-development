"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/images/icons/logo.webp";
import { IoMdArrowForward } from "react-icons/io";
import { strings } from "@/app/assets/locales/locales";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const localeText = strings.navbar;

  return (
    <React.Fragment>
      <nav className="flex items-center justify-between font-medium text-lg border-b-[1px] border-gray-300 pl-[50px] h-[91px]">
        <Image
          className="w-16 h-16"
          src={logo}
          alt={localeText.logoAltText}
        ></Image>
        <ul className="flex items-center gap-5 text-secondary transition-all duration-500 delay-200 ease-in-out cursor-pointer h-full">
          <li className="hover:text-primary">
            {localeText.navs.home.navTitle}
          </li>
          <DropdownMenu />
          <li className="hover:text-primary">
            {localeText.navs.services.navTitle}
          </li>
          <li className="hover:text-primary">
            {localeText.navs.caseStudies.navTitle}
          </li>
        </ul>
        <button className="group bg-primary text-white h-full flex items-center gap-12 px-7 py-4 hover:bg-white hover:text-secondary  duration-500 ease-in-out">
          <span>{localeText.buttonText}</span>
          <IoMdArrowForward className="w-5 h-5 rotate-45 group-hover:rotate-0 transition-all" />
        </button>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
