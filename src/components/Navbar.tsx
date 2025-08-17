import React, { useState } from "react";
import { linkData } from "../data/link";
import { Menu, X } from "lucide-react"; // Atau icon library lain

type NavbarProps = {
  label?: string;
  link?: string;
  onClick?: () => void;
  icon?: string;
};

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav
        className="flex items-center justify-between bg-transparent px-6 md:px-12 py-6 md:py-8 text-white z-[99999] fixed top-0 w-full transition-all duration-300 ease-in-out"
        id="nav-wrapper"
      >
        <h1 className="font-clicker text-3xl md:text-4xl text-white z-[999]">
          Bean Scene
        </h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden z-[9999]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links (desktop) */}
        <div className="hidden md:flex space-x-6" id="link-wrapper">
          {linkData.map((item, index) => (
            <a
              key={index}
              className="nav-link cursor-pointer"
              onClick={item.onClick}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Buttons (desktop) */}
        <div className="hidden md:flex space-x-2">
          <button type="button" className="btn-transparent cursor-pointer">
            Sign In
          </button>
          <button type="button" className="btn-primary cursor-pointer">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {linkData.map((item, index) => (
            <a
              key={index}
              className="text-2xl"
              onClick={() => {
                item.onClick?.();
                setIsOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <button type="button" className="btn-transparent w-40">
            Sign In
          </button>
          <button type="button" className="btn-primary w-40">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};
