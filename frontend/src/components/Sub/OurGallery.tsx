import { useRef } from "react";
import ImageSlider, { ImageSliderHandle } from "./ImageSlider";

export default function OurGallery() {
  const sliderRef = useRef<ImageSliderHandle | null>(null);

  return (
    <section
      id="about"
      className="mb-[3vh] flex justify-center h-fit min-h-[20svh] w-[70svw]"
    >
      <div className="flex flex-col gap-6 py-10 px-4 sm:p-10 rounded-xl min-h-full h-fit w-full bg-white">
        <div className="flex justify-center font-normal w-full gap-4 max-h-fit">
          <h3 className="text-3xl md:text-5xl">Our Gallery</h3>
        </div>
        <div className="w-full relative">
          <ImageSlider ref={sliderRef} />
          <img
            src="/arrow.png"
            alt="ArrowLeft"
            className="absolute top-1/2 -translate-y-1/2 w-10 -left-[5%] cursor-pointer z-10"
            onClick={() => sliderRef.current?.scrollLeft()}
          />
          <img
            src="/arrow.png"
            alt="ArrowRight"
            className="absolute top-1/2 -translate-y-1/2 w-10 -right-[5%] rotate-180 cursor-pointer z-10"
            onClick={() => sliderRef.current?.scrollRight()}
          />
        </div>
      </div>
    </section>
  );
}
