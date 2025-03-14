import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React from "react";

const QualificationSection = () => {
  const { theme } = useTheme();
  const timelineData = [
    {
      year: "March, 2025",
      title: "MERN Stuck Course",
      institution: "Webskitters Academy",
      description:
        "Learned C, HTML, CSS, Bootstrap, Advance JavaScript, React Js, Next Js",
    },
    {
      year: "2023",
      title: "Bachelor's Degree",
      institution: "University of Culcutta",
      description:
        "Graduated with a Bachelor of Commerce degree and obtained marks is 80.00%",
    },
    {
      year: "2020",
      title: "Higher Secondary",
      institution: "WBCHSE, West Bengal",
      description:
        "Completed Higher Secondary education on Commerce and obtained marks is 88.00%",
    },
    {
      year: "2018",
      title: "Madhyamik",
      institution: "WBBSE, West Bengal",
      description:
        "Completed Madhyamik (10th Board) examination and obtained marks is 67.85%",
    },
  ];
  const workExperience = [
    {
      title: "Corporate Training as React Js Developer",
      year: "March, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nesciunt nisi ducimus delectus reprehenderit neque possimus voluptatibus excepturi harum aliquid.",
      institution: "Webskitters Technology",
    },
    {
      title: "Corporate Training as React Js Developer",
      year: "March, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nesciunt nisi ducimus delectus reprehenderit neque possimus voluptatibus excepturi harum aliquid.",
      institution: "Webskitters Technology",
    },
    {
      title: "Corporate Training as React Js Developer",
      year: "March, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nesciunt nisi ducimus delectus reprehenderit neque possimus voluptatibus excepturi harum aliquid.",
      institution: "Webskitters Technology",
    },
  ];
  return (
    <div className="my-container my-10">
      <div className="text-center mb-10">
        <h5 className="text-lg">Educational Qualification</h5>
        <h2 className="text-3xl font-semibold">
          Educational Background and Professional Studies
        </h2>
      </div>
      <div className="row">
        <div className="w-full lg:w-1/2 relative ">
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
            {timelineData.map((item, index) => (
              <div key={index} className="mb-8 relative ">
                {/* Dot with FontAwesome Icon */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-blue-400  rounded-full shadow-md z-10">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-white" size="lg" />
                </div>

                {/* Timeline Content */}
                <div
                  className={`${
                    theme === "dark"
                      ? "bg-dark text-white"
                      : "bg-light text-black"
                  } shadow-md rounded-lg p-5`}
                >
                  <h3 className="text-xl font-semibold ">{item.title}</h3>
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
        <div className="w-full lg:w-1/2 relative">
          <h4 className="text-2xl text-right font-medium">Work Experience</h4>
          <div
            className={`relative border-r-4 pr-6 timeline2  ${
              theme === "dark"
                ? "border-gray-50 after:bg-[#121212] before:bg-[#121212]"
                : "border-gray-900 after:bg-white  before:bg-white"
            } rounded-lg p-5 before:h-[20%] after:h-[15%]`}
          >
            {workExperience.map((item, index) => (
              <div key={index} className="mb-8 relative ">
                {/* Dot with FontAwesome Icon */}
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-blue-400  rounded-full shadow-md z-10">
                  <FontAwesomeIcon icon={faBriefcase} className="text-white" size="lg" />
                </div>

                {/* Timeline Content */}
                <div
                  className={`${
                    theme === "dark"
                      ? "bg-dark text-white"
                      : "bg-light text-black"
                  } shadow-md rounded-lg p-5`}
                >
                <h3 className="text-xl font-semibold ">{item.title}</h3>
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
