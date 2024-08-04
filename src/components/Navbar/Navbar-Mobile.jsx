import { useState } from "react";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { navLinks } from "../../utils";

const NavbarMobile = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-14 p-2 bg-rose-200 border-b border-b-white/20"
          >
            <ul className="grid gap-1">
              {navLinks.map((link, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    className="w-full p-[0.08rem] rounded-xl "
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full p-4 rounded-xl bg-[#FADBD8] hover:cursor-pointer"
                      to={link.to}
                      smooth={true}
                      duration={500}
                    >
                      <span className="flex gap-1 text-lg text-red-800 font-bold">
                        {link.title}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
