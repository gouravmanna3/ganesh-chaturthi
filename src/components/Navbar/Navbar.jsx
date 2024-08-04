import NavbarMobile from "./Navbar-Mobile";
import NavbarDesktop from "./Navbar-Desktop";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-4 md:px-12 pl text-black font-merriWeather">
      <a
        className="text-base lg:text-2xl md:sml-12 tracking-widest hover:cursor-pointer italic font-semibold text-red-900"
        href="#"
      >
        Shree Ganesh Utsav Samithi Inc
      </a>
      <div className="flex gap-8 lg:gap-48 items-center font-robotoSlab tracking-widest">
        <NavbarDesktop />
        <NavbarMobile />
      </div>
    </nav>
  );
};

export default Navbar;
