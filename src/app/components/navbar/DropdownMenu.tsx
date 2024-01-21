"use client";
import { strings } from "@/app/assets/locales/locales";
import React, { useState } from "react";

const DropdownMenu = () => {
  const localeText = strings.navbar.navs.company;
  const [hovered, setHovered] = useState(false);
  return (
    <React.Fragment>
      <li
        className="relative h-full flex items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p className="hover:text-primary ">{localeText.navTitle}</p>
        {hovered && (
          <ul
            className={` bg-white rounded-lg border-[1px] border-gray-300 absolute top-20 px-5 py-4 w-[250px] space-y-5`}
          >
            {localeText.subNavs.map((subnav) => (
              <li
                key={subnav.navTitle}
                className="group flex items-center gap-1"
              >
                <span className="h-[2px] w-0 group-hover:w-[18px] bg-primary transition-all duration-300"></span>
                <p className="group-hover:ml-2 transition-all">
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
