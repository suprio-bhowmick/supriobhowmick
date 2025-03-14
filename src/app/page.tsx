"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import QualificationSection from "@/components/QualificationSection";
import SkillSection from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Page = () => {
  // State to manage mounting status
  const [mount, setMount] = useState<boolean>(false);
  
  // Accessing the setTheme function from next-themes
  const { setTheme } = useTheme();
  
  // Effect hook to set the theme to dark when the component mounts
  useEffect(() => {
   setTimeout(()=>{
    setTheme("dark");
    setMount(true);
   },2000)
  }, []);

  // If not mounted, show the loader
  if (!mount) {
    return <Loader />;
  }

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <QualificationSection />
      <SkillSection />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default Page;
