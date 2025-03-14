"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Loader = () => {
  const text = "SUPRIO";
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % text.length);
    }, 500);
    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#121212]">
      <div className="flex space-x-1 text-3xl font-bold text-white">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className={` font-extrabold  ${
              index === activeIndex ? 'text-blue-400' : ""
            }`}
            animate={{ opacity: [1, 1, 1] }}
            transition={{ duration: 0.4, repeat: Infinity }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
