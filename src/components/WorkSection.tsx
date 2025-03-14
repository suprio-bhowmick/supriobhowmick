import { images } from "@/lib/assets";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const WorkSection = () => {
  const { theme } = useTheme();
  const projects = [
    {
      title: "CRUD Operation with Authentication",
      description:
        "A full-stack application with authentication, enabling users to create, read, update, and delete data. Implements secure login, form validation, and API interactions.",
      techs: ["React Js", "React Router DOM", "Redux", "Axios", "Material UI"],
      github: "https://github.com/suprio-bhowmick/project1",
      versal: "https://project-gules-kappa.vercel.app/",
      image: images.project1.src,
    },
    {
      title: "Portfolio Website",
      description:
        "Build single page own portfolio fully responsible website using Next Js and Tailwind CSS as design with dark & light theme features",
      techs: ["Next Js", "Tailwind CSS"],
      github: "https://github.com/suprio-bhowmick/supriobhowmick",
      versal: "https://supriobhowmick.vercel.app/",
      image: images.project2.src,
    },
    {
      title: "e-Commerce website for bookstore",
      description:
        "Completed e-commerce website for Bookstore. The website using JSON Server for manage data like Product, User Registration, Orders etc. Key Features are product and product details, Authentication, Cart, Checkout, Order ect.",
      techs: [
        "React Js",
        "JSON",
        "Material UI",
        "Redux",
        "React Hook Form",
        "Axios",
      ],
      github: "https://github.com/suprio-bhowmick/bookadda",
      
      image: images.project3.src,
    },
    {
      title: "Matrix App for calculating mathematical operation ",
      description:
        "Create a matrix calculation app using React Js and Material UI. Here can calculate any n/n matrix to addition, subtraction and multiplication.",
      techs: ["React Js", "Material UI"],
      github: "https://github.com/suprio-bhowmick/matrix",
      versal: "https://matrix-steel.vercel.app/",
      image: images.project4.src,
    },
  ];
  return (
    <div id="project" className="my-container">
      <div className="text-center">
        <h5 className="text-lg">My Projects</h5>
        <h2 className="text-3xl font-semibold">
          My Hands-on Experience and Learning Outcome
        </h2>
      </div>
      <div className="mt-20">
        <div className="row gap-6 flex-wrap items-stretch justify-center">
          {projects?.map((project, index) => (
            <div className="w-full md:w-[40%] lg:w-[31%] flex" key={index}>
              <div
                className={`h-full flex flex-col flex-grow ${
                  theme === "dark"
                    ? "bg-dark text-white"
                    : "bg-light text-black"
                } shadow-md rounded-lg overflow-hidden`}
              >
                {/* Image Section */}
                <div className="w-full h-56">
                  <Image
                    src={project.image}
                    alt="Project"
                    width={850}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-5">{project.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      {project?.techs?.map((tech, index) => (
                        <span
                          className={`${
                            theme === "dark"
                              ? "bg-gray-700 text-white"
                              : "bg-gray-50 text-black"
                          } px-4 py-1 text-sm rounded-sm`}
                          key={index}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-lg mb-4 text-gray-600">
                      {project.description}
                    </p>
                  </div>

                  {/* Links Section */}
                  <div className="flex gap-5 mt-4">
                    <a
                     target="_blank"
                      href={project.github}
                      className={`h-10 w-10 flex justify-center items-center rounded-full ${
                        theme === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-50 text-black"
                      }`}
                    >
                      <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    {
                      project?.versal && 
                      <a
                      target="_blank"
                      href={project.versal}
                      className={`h-10 w-10 flex justify-center items-center rounded-full ${
                        theme === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-50 text-black"
                      }`}
                    >
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
