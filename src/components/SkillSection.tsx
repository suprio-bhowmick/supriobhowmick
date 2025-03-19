import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Skill {
  icon: any;
  name: string;
}
const SkillSkeleton = () => {
  return (
    <div className="w-36 h-36 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-xl mx-5 px-4 py-6">
      <div className="w-18 h-18 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto"></div>
      <div className="h-4 w-24 bg-gray-400 dark:bg-gray-600 mt-4 mx-auto rounded"></div>
    </div>
  );
};


const SkillSection = () => {
  const { theme } = useTheme();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "skill"]`);
      setSkills(data);
      setLoading(false)
      console.log("Skill", data);
    };
    fetchData();
  }, []);

  
  return (
    <div className="my-container my-3">
      <div className="text-center">
        <h5 className="text-lg">My Skills</h5>
        <h2 className="text-3xl font-semibold">
          Building the web with modern techs, tools & frameworks
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-3">
        {loading
          ? [...Array(8)].map((_, index) => <SkillSkeleton key={index} />)
          : skills.map((skill, index) => (
              <div
                key={index.toString()}
                className={`w-36 my-5 ${
                  theme === "dark"
                    ? "bg-dark text-white"
                    : "bg-light text-black"
                } mx-5 px-4 py-6 shadow rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 group`}
              >
                <Image
                  src={urlFor(skill?.icon).url()}
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
