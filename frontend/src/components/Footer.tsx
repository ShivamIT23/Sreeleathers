import Button from "./Sub/Button";

export default function Footer() {
  return (
    <footer className="bg-div min-h-[40vh] h-fit flex flex-col md:flex-row justify-between pt-[6vh] pb-[10vh] px-[8vw] text-[#0A92C1] font-bold sans text-[16px]">
      <div className="flex flex-col gap-2 md:h-[45vh] justify-start my-[10vh]">
        <h3 className="text-2xl">Shop By Category</h3>
        <p>Ladies Shoes</p>
        <p>Ladies Bag</p>
        <p>Ladies Bag</p>
        <p>Ladies Bag</p>
        <p>Ladies Bag</p>
      </div>
      <div className="flex flex-col justify-start h-[45vh] mb-20 md:mb-0 md:my-[1vh]">
        <img src="/Logo2.png" alt="logo-footer" className="h-[40vh]  " />
        <div className="w-full flex justify-center -mt-[2vh]">
        <Button>Enquiry For Franchise</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 my-[10vh] h-[45vh] justify-start">
        <h3 className="text-2xl">Company Info</h3>
        <p>About Us</p>
        <p>Contact</p>
      </div>
    </footer>
  );
}
