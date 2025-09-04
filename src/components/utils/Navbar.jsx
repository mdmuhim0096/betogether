import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { LogIn, LibraryBig } from "lucide-react";
import Clock from "./Clock";

const Navbar = () => {
  const navItems = ["home", "about", "blog", "testimonials", "contact"];
  const [isMenu, setIsMenu] = useState(false);
  const menuRef = useRef(null);

  // 🚀 Scroll progress from Framer Motion
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenu(false);
      }
    };
    if (isMenu) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenu]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[10000] h-1 bg-gradient-to-r from-green-400 to-blue-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] mt-1">
        <div className="w-full flex justify-between items-center p-2 backdrop-blur px-4">
          {/* Logo */}
          <motion.img
            src="./image/sitelogo.webp"
            alt="Logo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 drop-shadow-lg shadow-green-500 -ml-3 cursor-pointer"
          />
          <Clock />
          <div className="flex gap-3 sm:gap-5 md:gap-8 text-white w-full justify-center sm:w-4/12 md:w-5/12">
            <button className="flex items-center justify-between gap-2 text-sm sm:text-[16px]">
              <span>Login</span>
              <LogIn className="scale-90 sm:scale-100" />
            </button>
            <button className="flex items-center justify-between gap-2 text-sm sm:text-[16px]">
              <span>Signup</span>
              <LibraryBig className="scale-90 sm:scale-100" />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex sm:w-[70%] lg:w-[40%] justify-between items-center">
            {navItems.map((navItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="capitalize text-white hover:text-green-400 transition-colors"
              >
                <Link
                  to={`/${navItem === "home" ? "" : navItem}`}
                >
                  {navItem}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="text-white sm:hidden relative z-50 cursor-pointer"
            onClick={() => setIsMenu(!isMenu)}
            aria-label="Toggle menu"
          >
            {isMenu ? <X /> : <Menu />}
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenu && (
              <motion.div
                ref={menuRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 right-0 w-2/3 h-screen bg-zinc-900/90 p-6 sm:hidden flex flex-col items-start"
              >
                {navItems.map((navItem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="capitalize text-white text-lg my-4 w-full hover:text-green-400"
                  >
                    <Link
                      to={`/${navItem === "home" ? "" : navItem}`}
                      onClick={() => setIsMenu(false)}
                    >
                      {navItem}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
