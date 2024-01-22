import { strings } from "@/app/assets/locales/locales";
import Image, { StaticImageData } from "next/image";

type GalleryProps = {
  images: StaticImageData[];
};

const ImageGallery = ({ images }: GalleryProps) => {
  const altText = strings.home.hero.altText;
  return (
    <div className="flex justify-center w-full mx-auto pb-24 pt-32 overflow-x-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          alt={altText.gallry}
          className={`w-full rounded-xl h-[340px] 2xl:h-[450px] object-cover ${
            index % 2 === 0 ? "-rotate-12" : "rotate-6"
          } ${index > 0 ? "z-10" : "z-0"}`}
          src={image}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
