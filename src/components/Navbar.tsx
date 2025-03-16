"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-green-800" : "bg-green-800"
      } p-4 sticky top-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="#" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="KFU Guest House"
            className="h-10 rounded-full"
          />{" "}
          <span className="ml-2"> KFU</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-1 bg-white mb-1 transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-white mb-1 transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-white transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex md:space-x-6">
          <li>
            <a href="#about" className="text-white hover:text-green-300">
              About
            </a>
          </li>
          <li>
            <a href="#features" className="text-white hover:text-green-300">
              Features
            </a>
          </li>
          <li>
            <a
              href="#accommodations"
              className="text-white hover:text-green-300"
            >
              Accommodations
            </a>
          </li>
          <li>
            <a href="#gallery" className="text-white hover:text-green-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-green-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-green-800 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <a
              href="#about"
              className="text-white hover:text-green-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-white hover:text-green-300"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#accommodations"
              className="text-white hover:text-green-300"
              onClick={() => setIsOpen(false)}
            >
              Accommodations
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="text-white hover:text-green-300"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-green-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
