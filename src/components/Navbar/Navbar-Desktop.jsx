import { Link } from "react-scroll";
import { navLinks } from "../../utils";

const NavbarDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-16 text-sm">
      {navLinks.map((link) => {
        const { title, to } = link;
        return (
          <li key={to}>
            <Link
              to={to}
              className="flex items-center gap-2 text-red-800 font-bold text-base hover:text-red-900 transition-colors duration-300 ease-in-out hover:cursor-pointer"
              smooth={true}
              duration={500}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarDesktop;
