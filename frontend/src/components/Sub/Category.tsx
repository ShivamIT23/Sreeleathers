const category = [
  { src: "/Img5.png", title: "ladies shoes" },
  { src: "/Img6.png", title: "ladies bag" },
  { src: "/Img7.png", title: "men's shoes" },
  { src: "/Logo.png", title: "" },
  { src: "/Img8.png", title: "accessories" },
  { src: "/Img9.png", title: "bags" },
];

export default function Category() {
  return (
    <section className="min-h-[50vh] h-fit flex gap-6 flex-col pt-10 px-[5vw] mb-[53px]">
      <div className="w-full flex justify-center items-center px-[1vw]">
        <div className="px-[2vw] mx-[1vw] flex justify-center items-center w-full">
          <h3 className="font-normal text-3xl text-center md:text-5xl sm:whitespace-nowrap">
            SHOP BY CATEGORY
          </h3>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 mt-6 gap-6">
        {category.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
    </section>
  );
}

function Card({ card }: { card: { src: string; title: string } }) {
  return (
    <article
      id={card.title.replace(/ /g, "_")}
      className="flex flex-col col-span-1 w-full max-h-[675px]"
    >
      <img
        src={card.src}
        alt="ProductImg"
        className="object-contain aspect-square max-h-[600px] w-full"
      />
      <div className="w-full flex items-center justify-center min-h-[75px]">
        <h3 className="font-normal text-2xl sm:text-4xl text-center ">
          {card.title.toUpperCase()}
        </h3>
      </div>
    </article>
  );
}
