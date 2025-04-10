import Button from "./Sub/Button";
import  { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-div min-h-[40vh] h-fit flex flex-col md:flex-row justify-between pt-[6vh] md:pb-[10vh] px-[8vw] text-[#0A92C1] font-bold sans text-[16px]">
      <div className="flex flex-col gap-2 md:h-[45vh] justify-start mt-[4vh] md:my-[10vh]">
        <h3 className="text-2xl">Shop By Category</h3>
        <p
          onClick={() => scrollToSection("ladies_shoes")}
          className="cursor-pointer"
        >
          Ladies Shoes
        </p>
        <p
          onClick={() => scrollToSection("ladies_bag")}
          className="cursor-pointer"
        >
          Ladies Bag
        </p>
        <p
          onClick={() => scrollToSection("men's_bag")}
          className="cursor-pointer"
        >
          Men's Bag
        </p>
        <p onClick={() => scrollToSection("bags")} className="cursor-pointer">
          Bags
        </p>
        <p
          onClick={() => scrollToSection("accessories")}
          className="cursor-pointer"
        >
          Accessories
        </p>
      </div>
      <div className="flex flex-col justify-start h-[45vh] mb-20 md:mb-0 md:my-[1vh]">
        <img src="/Logo2.png" alt="logo-footer" className="h-[40vh]  " />
        <div className="max-w-full w-full flex justify-center -mt-[2vh]">
          <Button>Enquiry For Franchise</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-[3vh] md:my-[10vh] h-[45vh] justify-start">
        <h3 className="text-2xl">Company Info</h3>
        <div className="w-full -px-5">
         <NavLink to="/about">About</NavLink> 
        </div>
        <div>
          <NavLink to="/contact">Contact</NavLink>
        </div>        
      </div>
    </footer>
  );
}


function NavLink({ to, children }: { to: string; children: string }) {
    const location = useLocation();
  
    useEffect(() => {
      console.log(location.pathname);
    }, [location]);
  
    const isActive = location.pathname === to;
  
    return (
      <Link
        to={to}
        className={` py-2 whitespace-nowrap rounded-md transition-all duration-200 ease-in-out ${
          isActive
            ? "text-[#171520]"
            : "text-inherit hover:text-[#171520]"
        }`}
      >
        {children}
      </Link>
    );
  }