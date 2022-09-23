import React, { useCallback, useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IconContext } from "react-icons";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type CarouselProps = {
  images: string[];
};

type AutoIncrementProps = {
  images: string[];
};

type AutoIncrementType = [number, () => void, () => void];

const useAutoIncrement = ({
  images,
}: AutoIncrementProps): AutoIncrementType => {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = useCallback(() => {
    currentImage !== images.length - 1
      ? setCurrentImage((i) => i + 1)
      : setCurrentImage(0);
  }, [currentImage, images.length]);

  const previousImage = useCallback(() => {
    currentImage !== 0
      ? setCurrentImage((i) => i - 1)
      : setCurrentImage(images.length - 1);
  }, [currentImage, images.length]);

  useEffect(() => {
    const t = setTimeout(() => nextImage(), 5000);
    return () => clearTimeout(t);
  }, [nextImage]);

  return [currentImage, nextImage, previousImage];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImage, nextImage, previousImage] = useAutoIncrement({ images });
  const [carousel] = useAutoAnimate<HTMLDivElement>();
  return (
    <div className="flex flex-row p-2 w-full h-full justify-between items-center">
      <IconContext.Provider
        value={{ className: "fill-gray-500 dark:fill-slate-300", size: "44" }}
      >
        <button
          onClick={() => {
            previousImage();
          }}
        >
          <MdChevronLeft />
        </button>
        <div
          className="w-full h-full min-h-[400px] relative rounded-3xl"
          ref={carousel}
        >
          {images.map((image, idx) =>
            currentImage === idx ? (
              <Image
                key={image}
                src={image}
                alt=""
                layout="fill"
                objectFit="cover"
                draggable={false}
                className="rounded-3xl"
              />
            ) : null
          )}
        </div>
        <button
          onClick={() => {
            nextImage();
          }}
        >
          <MdChevronRight />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export { Carousel };
