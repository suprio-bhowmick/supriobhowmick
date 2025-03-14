import { images } from "@/lib/assets";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  const { theme } = useTheme();
  return (
    <div id="about" className="my-container  my-10">
      <div className="row items-center">
        <div className="w-full lg:w-3/5">
          <div className="mb-10">
            <h5 className="text-lg">About Me</h5>
            <h2 className="text-3xl font-semibold">
              Know me better in just a few simple words
            </h2>
          </div>
          <div className="">
            <p className="text-lg mb-5">
              Myself Suprio Bhowmick, from a village named Khila, located in
              Howrah district. I have been fascinated by technology since
              childhood. During the lockdown in 2020, I started exploring
              technology, especially coding, and learned from YouTube and other
              resources.
            </p>
            <p className="text-lg mb-7">
              After completing my Bachelor of Commerce degree from the
              University of Calcutta in 2023, I decided to build my career in
              this field. I took admission in Webskitters Academy for the MERN
              Stack course. Now, I have completed React JS, and I am confident
              in starting a job.
            </p>
            {/* <ul>
              <li className="text-lg flex gap-4 my-1">
                <span>Full Name :</span>
                <span>Suprio Bhowmick</span>
              </li>
              <li className="text-lg flex gap-4 my-1">
                <span>Date of Birth :</span>
                <span>05 June, 2002</span>
              </li>
              <li className="text-lg flex gap-4 my-1">
                <span>Address :</span>
                <span>Khila, Howrah - 711410</span>
              </li>
              <li className="text-lg flex gap-4 my-1">
                <span>Nationality :</span>
                <span>Indian</span>
              </li>
            </ul> */}
            <a
              href="#"
              className={`px-15 py-3  ${
                theme === "dark"
                  ? "bg-gray-950 text-white"
                  : "bg-gray-200 text-black"
              } text-lg rounded-full inline-block mt-7 border-gray-600 border-1`}
            >
              <FontAwesomeIcon icon={faDownload} /> My Resume
            </a>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <Image
            src={images.aboutMe.src}
            alt="About Me"
            width={1000}
            height={1000}
            className="w-full rounded-2xl object-contain shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
