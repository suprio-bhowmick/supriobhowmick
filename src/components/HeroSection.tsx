"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Image as SanityImage } from "sanity";

interface HeroData {
  name: string;
  bio: string;
  phone: string;
  email: string;
  heroImage: SanityImage;
}

const HeroSection = () => {
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "hero"][0]{
          name,
          bio,
          phone,
          email,
          "heroImage": heroImage.asset->_id
        }`
      );
      setHero(data);
    };

    fetchData();
  }, []);


  return (
    <div id="home" className="my-container my-10 pt-20">
      <div className="row items-center">
        {/* Hero Image */}
        <div className="w-full lg:w-1/2">
          {hero?.heroImage ? (
            <Image
              src={urlFor(hero.heroImage).url()}
              alt="Hero Image"
              width={500}
              height={400}
              className="w-full h-[400px] md:h-[500px] rounded-2xl object-cover"
            />
          ) : (
            <Skeleton className="w-full h-[400px] md:h-[500px] rounded-2xl" />
          )}
        </div>

        {/* Hero Content */}
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <p className="text-xl my-2">Hi, I am </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-1">
            {hero?.name || <Skeleton width={500} />}
          </h1>
          <p className="text-xl my-2 flex justify-center md:justify-start items-center gap-2 text-blue-400">
            <FontAwesomeIcon
              icon={faReact}
              className="animate-spin text-blue-400 text-2xl"
              style={{ animation: "spin 5s linear infinite" }}
            />
            Frontend React Js Developer
          </p>
          <p className="text-lg mt-5">
            {hero?.bio || <Skeleton count={3} />}
          </p>

          {/* Contact Info */}
          <div className="mt-7">
            <ul className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center sm:items-start">
              <li>
                <a href="#" className="text-lg flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  {hero?.phone || <Skeleton width={120} />}
                </a>
              </li>
              <li>
                <a href="#" className="text-lg flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  {hero?.email || <Skeleton width={180} />}
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
