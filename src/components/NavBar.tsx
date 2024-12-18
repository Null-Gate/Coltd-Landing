import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import navlogo from "../assets/nav.png";

const NavBar: React.FC = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Safety", path: "/safety" },
    { name: "Pricing", path: "/pricing" },
  ];

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center p-4 container mx-auto">
        <img className="h-12" src={navlogo} alt="Nav Logo" />
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex flex-col lg:flex-row items-center gap-5 relative">
            {pages.map((el) => {
              const isActive = location.pathname === el.path;
              return (
                <NavLink to={el.path} key={el.name} className="relative">
                  <p className="relative hover:cursor-pointer text-lg lg:text-base font-medium text-gray-700 hover:text-primary">
                    {el.name}
                  </p>
                  <motion.div
                    className="absolute -bottom-1 rounded left-0 right-0 h-1 bg-primary"
                    initial={{ opacity: 0, width: 0 }}
                    animate={isActive ? { opacity: 1, width: "100%" } : {}}
                    transition={{ duration: 0.3 }}
                  />
                </NavLink>
              );
            })}
          </div>
          <div className="mt-4 lg:mt-0">
            <button className="classic-btn px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition duration-300 ease-in-out">
              Hit me up something
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-start gap-4 p-4 bg-gray-100">
              {pages.map((el) => (
                <NavLink
                  to={el.path}
                  key={el.name}
                  className="relative text-lg font-bold text-gray-700 hover:text-primary"
                  onClick={toggleMenu}
                >
                  {el.name}
                </NavLink>
              ))}
              <button className="classic-btn w-full px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition duration-300 ease-in-out">
                Hit me up something
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
