import About from "../components/Sub/About";
import Category from "../components/Sub/Category";
import Form from "../components/Sub/Form";
import Franchise from "../components/Sub/Franchise";

const collection = [
  {
    src: "/Img10.png",
    title: "Office Shoes",
  },
  {
    src: "/Img11.png",
    title: "Daily Bags",
  },
  {
    src: "/Img12.png",
    title: "Sandals",
  },
  {
    src: "/Img13.png",
    title: "Gift Set",
  },
];

export default function Main() {
  return (
    <main className="min-h-svh h-fit flex flex-col">
      <section className="h-fit w-full flex justify-center">
        <img src="/FrontImg.jpeg" alt="" />
      </section>
      <section className="min-h-[50vh] h-fit flex flex-col pt-10 sm:px-[5vw] mb-[23px]">
        <div className="w-full flex justify-center items-center px-[1vw]">
          <div className="flex w-[20%] sm:w-[35%] ml-[5%] items-center h-[2px] bg-[#D1D5D8]"></div>
          <div className="px-[2vw] mx-[1vw] flex justify-center items-center max-w-[60%] sm:max-w-[20%]">
            <h3 className="font-normal text-lg sm:text-3xl md:text-5xl whitespace-nowrap text-[#4AB1EC]">
              SHOP FOR
            </h3>
          </div>
          <div className="flex w-[20%] sm:w-[35%] items-center mr-[5%] h-[2px] bg-[#D1D5D8]"></div>
        </div>
        <div className="px-[15px] py-[4vh] flex h-full w-full flex-col md:flex-row">
          <div className="flex flex-col h-full items-center justify-center lg:flex-row">
            <img src="/Img1.png" alt="" className="p-[10px] lg:w-[50%]" />
            <img src="/Img2.png" alt="" className="p-[10px] lg:w-[50%]" />
          </div>
          <div className="flex flex-col min-h-full items-center justify-center lg:flex-row">
            <img
              src="/Img3.png"
              alt=""
              className="object-contain lg:object-cover w-full lg:h-full p-[10px] lg:w-[50%]"
            />
            <img
              src="/Img4.png"
              alt=""
              className="p-[10px] w-full object-contain lg:object-cover lg:w-[50%]"
            />
          </div>
        </div>
      </section>
      <Category />
      <section className="bg-div min-h-[40vh] h-fit flex flex-col justify-between pt-[6vh] pb-[10vh] px-[8vw] font-bold sans text-[16px]">
        <h2 className="w-full flex justify-center font-normal text-3xl sm:text-5xl py-[3vh] text-center">
          POPULAR COLLECTION
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {collection.map((card, index) => {
            return <Collection key={index} card={card} />;
          })}
        </div>
      </section>
      <Franchise />
      <Form />
      <About />
    </main>
  );
}

function Collection({ card }: { card: { src: string; title: string } }) {
  return (
    <article className="flex flex-col col-span-1 w-full max-h-[540px]">
      <img
        src={card.src}
        alt="ProductImg"
        className="object-contain boxShadowHover transition aspect-square rounded-xl max-h-[500px] w-full"
      />
      <div className="w-full flex items-center justify-center min-h-[32px]">
        <h3 className="font-semibold inter text-2xl text-center ">
          {card.title}
        </h3>
      </div>
    </article>
  );
}
