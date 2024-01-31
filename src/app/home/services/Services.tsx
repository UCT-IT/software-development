import { strings } from "@/app/assets/locales/locales";
import Link from "next/link";
import Circles from "./circles/Circles";

const Services = () => {
  const localetext = strings.home.services;
  const textEffect =
    "font-bold text-5xl md:text-7xl lg:text-8xl text-transparent transition-colors duration-700 hover:text-white";
  return (
    <div className="bg-secondary py-32 relative">
      <Circles />
      <div className="responve-container grid place-items-center text-white space-y-16 text-center">
        <p className="bg-[#453159] py-2 px-4 rounded-lg font-medium text-lg">
          {localetext.heading}
        </p>
        {localetext.contents.map((item) => (
          <div key={item.title.text}>
            <Link href={item.title.url}>
              <h3
                style={{ WebkitTextStroke: "1px #fff"}}
                className={`${textEffect}`}
              >
                {item.title.text}
              </h3>
            </Link>
            <p className="mt-6 font-medium md:text-lg md:whitespace-pre-line">
              {item.description}
            </p>
          </div>
        ))}
        <Link href={localetext.serviceButton.url}>
          <button
            aria-label="service button"
            className="group px-10 py-4 border-[1px] border-primary transition-all duration-300 hover:bg-white hover:text-primary bg-primary text-white rounded-full capitalize font-medium flex gap-10 items-center"
          >
            <span>{localetext.serviceButton.text}</span>
            <span className="h-2 w-2 rounded-full bg-white group-hover:bg-black transition-all"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
