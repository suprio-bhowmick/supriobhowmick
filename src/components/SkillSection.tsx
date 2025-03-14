import { SkillIcon } from "@/lib/assets";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface Skill {
  icon: StaticImageData;
  name: string;
}
const SkillSection = () => {
  const { theme } = useTheme();
  const skills: Skill[] = [
    {
      icon: SkillIcon.react,
      name: "React Js",
    },
    {
      icon: SkillIcon.next,
      name: "Next.js",
    },
    {
      icon: SkillIcon.js,
      name: "JavaScript",
    },
    {
      icon: SkillIcon.typescript,
      name: "TypeScript",
    },
    {
      icon: SkillIcon.html,
      name: "HTML5",
    },
    {
      icon: SkillIcon.css,
      name: "CSS3",
    },
    {
      icon: SkillIcon.bootstrap,
      name: "Bootstrap",
    },
    {
      icon: SkillIcon.tailwind,
      name: "Tailwind CSS",
    },
    {
      icon: SkillIcon.mui,
      name: "Material UI",
    },
    {
      icon: SkillIcon.git,
      name: "Git",
    },
    {
      icon: SkillIcon.github,
      name: "GitHub",
    },
    {
      icon: SkillIcon.reactRouter,
      name: "React Router",
    },
    {
      icon: SkillIcon.redux,
      name: "Redux",
    },
  ];
  return (
    <div className="my-container my-3">
      <div className="text-center">
        <h5 className="text-lg">My Skill</h5>
        <h2 className="text-3xl font-semibold">
          Building the web with modern techs, tools & frameworks
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index.toString()}
            className={`w-36 my-5 ${
              theme === "dark"
                ? "bg-dark text-white"
                : "bg-light text-black"
            } mx-5 px-4 py-6 shadow rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 group`}
          >
            <Image
              src={skill.icon.src}
              alt={skill.name}
              width={500}
              height={500}
              className="w-18 h-18 mx-auto grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <h4 className="text-center font-medium text-lg mt-5">
              {skill.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
