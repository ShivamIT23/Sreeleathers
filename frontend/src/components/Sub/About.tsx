import { useState } from "react";
import OurGallery from "./OurGallery";

const images = [
  "Img14.jpeg",
  "Img15.jpeg",
  "Img16.jpeg",
  "Img17.jpeg",
  "Img18.jpeg",
  "Img19.jpeg",
];

const aboutText = `The journey of Sreeleathers began in the year 1952 in the still city
            of Jamshedpur, Jharkhand, founded by visionary freedom fighter Mr.
            Suresh Chandra Dey. After independence, Suresh Chandra Dey opened
            the first Sreeleathers store in Sakchi ,Jamshedpur in 1952.
            Sreeleathers Sakchi , being the pioneer of footwear business in east
            India, holds 72 years of customer service experience and still
            continues the legacy of the founder . Brand Sreeleathers has been a
            household name in India due to its excellent quality and value for
            money range . It is now all set to explore multiple cities to expand
            the reach of the brand to the masses.`;

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <section
      id="about"
      className="my-[8vh] px-[15vw] flex justify-center h-fit min-h-[80svh] w-svw"
    >
      <div className="flex flex-col gap-6 py-10 px-4 sm:p-10 rounded-xl min-h-full h-fit w-full bg-white">
        <div className="flex flex-col items-center justify-start font-normal gap-4 max-h-fit ">
          <h3 className="text-3xl md:text-5xl">ABOUT US</h3>
          <div>
            <p
              className={`"text-[12px] xl:text-lg sans text-start" about-text ${
                expanded ? "expanded" : "clamped"
              }`}
            >
              {aboutText}
            </p>
            <button onClick={toggleExpanded} className="read-more-btn">
              {expanded ? "show less" : "...read more"}
            </button>
          </div>
        </div>
        <OurGallery />
        <div className="grid md:grid-cols-3 gap-4 mt-5">
          <h3 className="col-span-full w-full flex justify-center font-normal text-3xl md:text-5xl pb-4">
            Follow us on INSTAGRAM
          </h3>
          {images.map((card, index) => {
            return <Images key={index} card={card} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Images({ card }: { card: string }) {
  return (
    <article className="flex flex-col col-span-1 w-full max-h-fit h-fit">
      <img
        src={card}
        alt="ProductImg"
        className="object-contain aspect-square rounded-xl max-h-[600px] w-full"
      />
    </article>
  );
}
