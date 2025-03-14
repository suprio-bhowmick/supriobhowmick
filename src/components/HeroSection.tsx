import { images } from "@/lib/assets";
import {  faReact } from "@fortawesome/free-brands-svg-icons";
import {  faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {  faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div id="home" className="my-container my-10 pt-20">
      <div className="row items-center">
        {/* Hero Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={`${images.heroBg.src}`}
            alt="Hero Image"
            width={500}
            height={400}
            className="w-full h-[400px] md:h-[500px] rounded-2xl object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <p className="text-xl my-2">Hi, I am </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-1">Suprio Bhowmick</h1>
          <p className="text-xl my-2 flex justify-center md:justify-start items-center gap-2 text-blue-400">
            <FontAwesomeIcon icon={faReact} className="animate-spin text-blue-400 text-2xl" style={{ animation: "spin 5s linear infinite" }}  />
            Frontend React Js Developer
          </p>
          <p className="text-lg mt-5">
          a passionate React JS developer with strong fundamentals in JavaScript, React, and front-end development. I’ve built responsive web applications using React components, hooks, and REST APIs. I’m familiar with tools like Git, GitHub, Tailwind CSS, and React Router, and I’m eager to grow in real-world projects.
          </p>

         

          {/* Contact Info */}
          <div className="mt-7">
            <ul className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center sm:items-start">
              <li>
                <a href="#" className="text-lg flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} /> +91 8609 825 971
                </a>
              </li>
              <li>
                <a href="#" className="text-lg flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} /> supriobhowmick2025@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
