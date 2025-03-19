import { useState, useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { client } from "@/sanity/lib/client";
import { Image as SanityImage } from "sanity";
import { urlFor } from "@/sanity/lib/image";

interface Project {
  title: string;
  description: string;
  techs: string[];
  github: string;
  versal: string;
  image: SanityImage;
}

const WorkSection = () => {
  const { theme } = useTheme();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        '*[_type == "projects"]{title, description, techs, github, versal, "image": image.asset->url}'
      )
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

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
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            : projects?.map((project, index) => (
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
                      {project.image ? (
                        <Image
                          src={urlFor(project?.image).url()}
                          alt="Project"
                          width={850}
                          height={450}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Skeleton height={225} />
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-5">
                          {project.title}
                        </h3>
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
                          rel="noopener noreferrer"
                          href={project.github}
                          className={`h-10 w-10 flex justify-center items-center rounded-full ${
                            theme === "dark"
                              ? "bg-gray-700 text-white"
                              : "bg-gray-50 text-black"
                          }`}
                        >
                          <FontAwesomeIcon icon={faGithub} size="xl" />
                        </a>
                        {project?.versal && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.versal}
                            className={`h-10 w-10 flex justify-center items-center rounded-full ${
                              theme === "dark"
                                ? "bg-gray-700 text-white"
                                : "bg-gray-50 text-black"
                            }`}
                          >
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        )}
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

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="w-full md:w-[40%] lg:w-[31%] flex">
    <div className="h-full flex flex-col flex-grow bg-gray-200 shadow-md rounded-lg overflow-hidden">
      <Skeleton height={225} />
      <div className="p-5 flex flex-col flex-grow justify-between">
        <Skeleton height={30} width="80%" />
        <div className="flex flex-wrap gap-3 mb-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} height={20} width={60} />
          ))}
        </div>
        <Skeleton count={3} />
        <div className="flex gap-5 mt-4">
          <Skeleton circle height={40} width={40} />
          <Skeleton circle height={40} width={40} />
        </div>
      </div>
    </div>
  </div>
);

export default WorkSection;
