import { motion, useAnimation } from "framer-motion";
import {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

const images = ["Img20", "Img21", "Img22", "Img23", "Img24", "Img25"];

export type ImageSliderHandle = {
  scrollLeft: () => void;
  scrollRight: () => void;
};

const ImageSlider = forwardRef<ImageSliderHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [x, setX] = useState(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const totalImages = images.length;

  const updateDimensions = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollWidth = container.scrollWidth;
      const offsetWidth = container.offsetWidth;
      setMaxDrag(scrollWidth - offsetWidth);

      const card = container.querySelector("div");
      if (card) {
        const width = (card as HTMLElement).offsetWidth + 32; // gap-8 = 32px
        setCardWidth(width);
      }
    }
  };

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      updateDimensions();
    }
  }, [imagesLoaded]);

  const scroll = (dir: "left" | "right") => {
    let newX = x + (dir === "left" ? cardWidth : -cardWidth);
    newX = Math.max(-maxDrag, Math.min(0, newX));
    setX(newX);
    controls.start({ x: newX });
  };

  useImperativeHandle(ref, () => ({
    scrollLeft: () => scroll("left"),
    scrollRight: () => scroll("right"),
  }));

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -maxDrag, right: 0 }}
        dragElastic={0.1}
        animate={controls}
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="w-[30%] max-w-fit rounded-2xl shrink-0"
          >
            <img
              src={`/${img}.png`}
              alt={img}
              onLoad={() => setImagesLoaded((prev) => prev + 1)}
              className="rounded-2xl w-full h-full object-cover pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export default ImageSlider;
