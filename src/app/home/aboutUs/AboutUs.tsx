import { strings } from "@/app/assets/locales/locales";
import Link from "next/link";

const AboutUs = () => {
  const localeText = strings.home.aboutUs;
  return (
    <div
      className="h-auto relative bg-contain bg-no-repeat bg-center py-32 responsive-container grid place-items-center"
      style={{ backgroundImage: "url('/images/aboutUs/aboutUs-bg.svg')" }}
    >
      <h3 className="text-3xl md:text-4xl lg:text-[58px] font-bold text-secondary">
        <span className="md:pl-32 lg:pl-48 xl:pl-64 text-[#998AA9] lg:whitespace-pre-line leading-tight">
          {localeText.titlePartOne}
        </span>
        <span className="leading-tight">{localeText.titlePartTwo}</span>
        <span className="text-[#998AA9] lg:whitespace-pre-line leading-tight">
          {localeText.titlePartThree}
        </span>
        <span className="lg:whitespace-pre-line leading-tight">
          {localeText.titlePartFour}
        </span>
      </h3>
      <Link href="#" className="mt-10">
        <button className="group px-10 py-4 border-[1px] border-primary transition-all hover:bg-white hover:text-primary bg-primary text-white rounded-full capitalize font-medium flex gap-10 items-center">
          <span>{localeText.aboutButton}</span>
          <span className="h-2 w-2 rounded-full bg-white group-hover:bg-black transition-all"></span>
        </button>
      </Link>
    </div>
  );
};

export default AboutUs;
