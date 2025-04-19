import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from "react";

const images = [
  "Img20",
  "Img21",
  "Img22",
  "Img23",
  "Img24",
  "Img25",
];

export type ImageSliderHandle = {
  scrollLeft: () => void;
  scrollRight: () => void;
};

const ImageSlider = forwardRef<ImageSliderHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const [position, setPosition] = useState(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const offsetWidth = containerRef.current.offsetWidth;
      const maxScrollable = scrollWidth - offsetWidth;
      setMaxDrag(maxScrollable);

      const card = containerRef.current.querySelector("div");
      if (card) {
        const width = (card as HTMLElement).offsetWidth + 32; // gap-8 = 32px
        setCardWidth(width);
      }
    }
  }, []);

  const scroll = (dir: "left" | "right") => {
    let newPosition = position + (dir === "left" ? cardWidth : -cardWidth);
    newPosition = Math.max(-maxDrag, Math.min(0, newPosition));
    setPosition(newPosition);
    controls.start({ x: newPosition });
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
              className="rounded-2xl w-full h-full object-cover pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export default ImageSlider;
