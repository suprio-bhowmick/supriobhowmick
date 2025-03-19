"use client";

import { useEffect, useState } from "react";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { client } from "@/sanity/lib/client";

type Qualification = {
  year: string;
  title: string;
  institution: string;
  description: string;
  type: string;
};

const QualificationSection = () => {
  const { theme } = useTheme();
  const [qualification, setQualification] = useState<Qualification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "qualification"]`
      );
      setQualification(data);
      setLoading(false);
      
    };
    fetchData();
  }, []);

  return (
    <div className="my-container my-10">
      <div className="text-center mb-10">
        <h5 className="text-lg">Educational Qualification</h5>
        <h2 className="text-3xl font-semibold">
          Educational Background and Professional Studies
        </h2>
      </div>
      <div className="row">
        {/* Educational Background */}
        <div className="w-full lg:w-1/2 relative">
          <h4 className="text-2xl text-left font-medium">
            Educational Background
          </h4>
          <div
           className={`relative border-l-4 pl-6 timeline  ${
            theme === "dark"
              ? "border-gray-50 after:bg-[#121212] before:bg-[#121212]"
              : "border-gray-900 after:bg-white  before:bg-white"
          }  rounded-lg p-5 `}
          >
            {loading
              ? [...Array(3)].map((_, index) => (
                  <Skeleton key={index} height={100} className="mb-5" />
                ))
              : qualification.filter(elem => elem.type === 'education').map((item, index) => (
                  <div key={index} className="mb-8 relative">
                    {/* Dot with FontAwesome Icon */}
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-blue-400 rounded-full shadow-md z-10">
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        className="text-white"
                        size="lg"
                      />
                    </div>
                    {/* Timeline Content */}
                    <div
                      className={`shadow-md rounded-lg p-5 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-black"}`}
                    >
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-400">{item.institution}</p>
                      <span className="text-sm text-gray-400 font-semibold">
                        {item.year}
                      </span>
                      <p className="text-gray-500 mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="w-full lg:w-1/2 relative">
          <h4 className="text-2xl text-right font-medium">Work Experience</h4>
          <div
            className={`relative border-r-4 pr-6 timeline2  ${
              theme === "dark"
                ? "border-gray-50 after:bg-[#121212] before:bg-[#121212]"
                : "border-gray-900 after:bg-white  before:bg-white"
            } rounded-lg p-5 before:h-[20%] after:h-[15%]`}
          >
            {loading
              ? [...Array(3)].map((_, index) => (
                  <Skeleton key={index} height={100} className="mb-5" />
                ))
              : qualification.filter(elem => elem.type === 'work').map((item, index) => (
                  <div key={index} className="mb-8 relative">
                    {/* Dot with FontAwesome Icon */}
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-blue-400 rounded-full shadow-md z-10">
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="text-white"
                        size="lg"
                      />
                    </div>
                    {/* Timeline Content */}
                    <div
                      className={`shadow-md rounded-lg p-5 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-black"}`}
                    >
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-400">{item.institution}</p>
                      <span className="text-sm text-gray-400 font-semibold">
                        {item.year}
                      </span>
                      <p className="text-gray-500 mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationSection;
