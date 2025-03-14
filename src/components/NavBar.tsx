"use client";
import { images } from "@/lib/assets";
import {
  faBars,
  faMoon,
  faSun,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React, { useState } from "react";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer function
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  // Close drawer when clicking outside or on a link
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <nav
      className="bg-cover bg-center bg-no-repeat container mx-auto fixed top-5 left-1/2 -translate-x-1/2 rounded-4xl shadow-lg bordered  z-50 "
      style={{ backgroundImage: `url(${images.navbarBg.src})` }}
    >
      <div className="flex justify-between items-center w-full backdrop-blur-3xl h-full py-5 px-10 rounded-4xl">
        {/* Logo */}
        <a href="#home" className="font-outfit font-extrabold text-3xl">
         <span className="text-blue-400">S</span>UPRIO
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-between items-center gap-6 font-outfit">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        {/* Theme Toggle & Resume */}
        <div className="flex gap-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="cursor-pointer px-3"
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </button>
          <a href="#">My Resume</a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden px-3"
            onClick={toggleDrawer}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0  bg-black bg-opacity-50 z-50"
          onClick={closeDrawer} // Click outside to close
        >
          <div
            className="fixed  left-0 -top-5 w-full h-screen bg-gray-800 flex flex-col items-center justify-center text-white gap-6"
            onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white"
              onClick={closeDrawer}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            {/* Mobile Nav Links */}
            <ul className="flex flex-col items-center justify-center gap-6 text-lg">
              <li>
                <a href="#home" onClick={closeDrawer}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={closeDrawer}>About Me</a>
              </li>
              <li>
                <a href="#project" onClick={closeDrawer}>Projects</a>
              </li>
              <li>
                <a href="#contact" onClick={closeDrawer}>Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
