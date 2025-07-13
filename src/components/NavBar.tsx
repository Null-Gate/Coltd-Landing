import React, { useState, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import navlogo from "../assets/nav.avif";

const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Safety", path: "/safety" },
  { name: "Pricing", path: "/pricing" },
];

const NavButton = () => (
  <button className="w-full lg:w-auto px-5 py-2 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition">
    Hit me up something
  </button>
);

const NavItem: React.FC<{ name: string; path: string; isActive: boolean }> = ({
  name,
  path,
  isActive,
}) => (
  <NavLink to={path} className="relative group">
    <p className="text-lg font-medium text-gray-700 group-hover:text-primary transition">
      {name}
    </p>
    <motion.div
      className="absolute left-0 right-0 h-[2px] bg-primary rounded bottom-0"
      initial={{ width: 0 }}
      animate={isActive ? { width: "100%" } : { width: 0 }}
      transition={{ duration: 0.3 }}
    />
  </NavLink>
);

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <header className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8 container mx-auto">
        <img
          className="h-10 w-auto"
          src={navlogo}
          alt="Kargate Logo"
          loading="lazy"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {pages.map(({ name, path }) => (
            <NavItem
              key={name}
              name={name}
              path={path}
              isActive={location.pathname === path}
            />
          ))}
          <NavButton />
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden px-4 pt-2 pb-6  shadow-inner rounded-b-xl"
          >
            <div className="flex flex-col gap-4">
              {pages.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={toggleMenu}
                  className="text-base font-semibold text-gray-700 hover:text-primary"
                >
                  {name}
                </NavLink>
              ))}
              <NavButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
