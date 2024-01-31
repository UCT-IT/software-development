import React from "react";
import circle1 from "../../../../../public/images/home/services/circle1.svg";
import circle2 from "../../../../../public/images/home/services/circle2.svg";
import circle3 from "../../../../../public/images/home/services/circle3.svg";
import square from "../../../../../public/images/home/services/square.svg";
import Image from "next/image";
const Circles = () => {
  return (
    <React.Fragment>
      <Image
        className="absolute top-48 md:top-[9%] left-5 md:left-20 animate-customSpin w-12 h-12 md:w-[90px] md:h-[90px] rounded-full"
        alt="circle"
        src={circle1}
      />
      <Image
        className="absolute right-11 animate-customSpin top-[32%] md:top-[25%] w-12 h-12 md:w-[90px] md:h-[90px] before:rounded-full"
        alt="circle"
        src={circle2}
      />
      <Image
        className="absolute top-[71%] md:top-[73%] lg:top-3/4 right-2 md:right-6 animate-customSpin w-12 h-12 md:w-[90px] md:h-[90px] before:rounded-full"
        alt="circle"
        src={circle3}
      />
      <Image
        className="absolute top-[48%] md:top-1/2 left-3 md:left-20 animate-customSpin w-12 h-12 md:w-[90px] md:h-[90px]"
        alt="circle"
        src={square}
      />
    </React.Fragment>
  );
};

export default Circles;
