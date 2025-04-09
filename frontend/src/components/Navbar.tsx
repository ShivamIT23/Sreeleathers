import Button from "./Sub/Button";

export default function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="min-h-[80px] h-fit flex items-start md:justify-between justify-center py-4 px-[2vw]">
      <div className="flex">
        <img
          src="/Logo.png"
          alt="Company-Logo"
          className="h-[70px] w-[200px] object-cover -mt-[15px]"
        />
      </div>
      <div className=" md:flex gap-6 h-full my-auto inter text-[#171520] font-medium text-sm hidden">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
      <div className="md:block hidden">
        <Button>Enquiry for Franchise</Button>
      </div>
    </nav>
  );
}
