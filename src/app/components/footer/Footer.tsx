import React from "react";
import logo from "../../../../public/images/icons/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { strings } from "@/app/assets/locales/locales";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const localeText = strings.footer;
  return (
    <React.Fragment>
      <div className="bg-secondary text-white pt-[130px]">
        <div className="responsive-container">
          <div className="flex justify-between flex-col lg:flex-row items-start mb-[50px] space-y-7 md:space-y-0">
            <div className="space-y-6 w-full text-center lg:text-left mb-10 lg:mb-0">
              <Link
                href="/"
                className="flex justify-center items-center lg:block"
              >
                <Image
                  className="w-16 h-16"
                  src={logo}
                  alt={localeText.logoAltText}
                ></Image>
              </Link>
              <p className="whitespace-pre-line font-medium text-lg cursor-pointer">
                <Link
                  href="https://maps.app.goo.gl/iAbCARQc9dCSfgj97"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {localeText.address}
                </Link>
              </p>
              <p className="whitespace-pre-line font-medium text-lg hover:text-primary transition-colors duration-300 underline cursor-pointer">
                {localeText.email}
              </p>
              <div className="flex items-center justify-center lg:justify-normal gap-7">
                <Link
                  href="https://www.facebook.com/uttaracomputertraininganditfirm/"
                  aria-label="Facebook Page Of UCTIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full hover:text-primary transition-colors duration-300"
                >
                  <FaFacebookF className="text-lg" />
                </Link>
                <Link
                  href=" https://wa.me/01996399534"
                  aria-label="Whatsapp number Of UCTIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full hover:text-primary transition-colors duration-300"
                >
                  <FaWhatsapp className="text-lg" />
                </Link>
              </div>
            </div>
            <div className="w-full max-w-[485px] mx-auto flex justify-between items-start px-5 md:px-0">
              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-2xl font-semibold">
                  {localeText.company.title}
                </h3>
                <ul className="space-y-6">
                  {localeText.company.navigations.map((navigation) => (
                    <li
                      key={navigation.navigation}
                      className="text-lg hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      {navigation.navigation}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 text-center lg:text-left">
                <h3 className="text-2xl font-semibold">
                  {localeText.resources.title}
                </h3>
                <ul className="space-y-6">
                  {localeText.resources.navigations.map((navigation) => (
                    <li
                      key={navigation.navigation}
                      className="text-lg hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      {navigation.navigation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="py-[30px] border-t border-[#ffffff33] text-center lg:text-left">
            <p>{localeText.copyRight}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
