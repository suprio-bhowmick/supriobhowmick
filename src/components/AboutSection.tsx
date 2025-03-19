"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface AboutData {
  title: string;
  description1: string;
  description2: string;
  resume: string;
  image: any;
}

const AboutSection = () => {
  const { theme } = useTheme();
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "about"][0]{
          title,
          description1,
          description2,
          resume,
          "image": image.asset->_id
        }`
      );
      setAbout(data);
    };

    fetchData();
  }, []);

  return (
    <div id="about" className="my-container my-10">
      <div className="row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-3/5">
          <div className="mb-10">
            <h5 className="text-lg">About Me</h5>
            <h2 className="text-3xl font-semibold">
              {about ? about.title : <Skeleton width={200} height={32} />}
            </h2>
          </div>
          <div>
            <p className="text-lg mb-5">
              {about ? about.description1 : <Skeleton count={3} height={20} />}
            </p>
            <p className="text-lg mb-7">
              {about ? about.description2 : <Skeleton count={2} height={20} />}
            </p>
            {about ? (
              <a
                href={about.resume}
                target="_blank"
                className={`px-15 py-3 ${
                  theme === "dark"
                    ? "bg-gray-950 text-white"
                    : "bg-gray-200 text-black"
                } text-lg rounded-full inline-block mt-7 border-gray-600 border-1`}
              >
                <FontAwesomeIcon icon={faDownload} /> My Resume
              </a>
            ) : (
              <Skeleton width={150} height={40} />
            )}
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full lg:w-2/5">
          {about?.image ? (
            <Image
              src={urlFor(about.image).url()}
              alt="About Me"
              width={500}
              height={500}
              className="w-full rounded-2xl object-contain shadow-2xl"
            />
          ) : (
            <Skeleton width="100%" height={300} className="rounded-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
