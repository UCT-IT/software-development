"use client";
import { strings } from "@/app/assets/locales/locales";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropdownMenu = () => {
  const localeText = strings.navbar.navs.company;
  const [hovered, setHovered] = useState(false);
  return (
    <React.Fragment>
      <li
        className="relative h-full flex lg:items-center flex-col lg:flex-row text-secondary"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p className="hover:text-primary group flex items-center justify-between lg:block">
          <span>{localeText.navTitle}</span>
          <span className="lg:hidden group-hover:-rotate-180 duration-300 ease-in-out">
            <MdOutlineKeyboardArrowDown />
          </span>
        </p>
        {hovered && (
          <ul
            className={` bg-white rounded-lg lg:border-[1px] lg:border-gray-300 lg:absolute top-20 px-5 py-4 w-full lg:w-[220px] space-y-3 lg:space-y-5 duration-300`}
          >
            {localeText.subNavs.map((subnav) => (
              <li
                key={subnav.navTitle}
                className="group flex items-center gap-1"
              >
                <span className="hidden lg:inline h-[2px] w-0 group-hover:w-[18px] bg-primary transition-all duration-300"></span>
                <p className="lg:group-hover:ml-2 group-hover:text-primary transition-all">
                  {subnav.navTitle}
                </p>
              </li>
            ))}
          </ul>
        )}
      </li>
    </React.Fragment>
  );
};

export default DropdownMenu;
