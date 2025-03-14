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

const page = () => {
  const [mount, setMount] = useState(false);
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
    setMount(true);
  },[]);
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

export default page;
