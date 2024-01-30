import { strings } from "@/app/assets/locales/locales";
import GradientBackground from "@/app/components/gradientBackground/GradientBackground";
import Link from "next/link";

const GetInTouch = () => {
  const localeText = strings.home.getInTouch;
  return (
    <GradientBackground>
      <div className="z-10 text-center text-white grid place-items-center">
        <h3 className="text-5xl md:text-7xl lg:text-8xl font-extrabold whitespace-pre-line">
          {localeText.title}
        </h3>
        <p className="text-lg font-bold mt-8 lg:whitespace-pre-line">
          {localeText.description}
        </p>
        <Link
          href={localeText.getInTouchButton.url}
          className="mt-12"
        >
          <button className="group px-8 py-3 transition-all hover:bg-primary hover:text-white bg-white text-secondary rounded-full capitalize font-medium flex gap-10 items-center">
            <span className="text-lg">{localeText.getInTouchButton.text}</span>
            <span className="h-2 w-2 rounded-full bg-black group-hover:bg-white transition-all"></span>
          </button>
        </Link>
      </div>
    </GradientBackground>
  );
};

export default GetInTouch;
