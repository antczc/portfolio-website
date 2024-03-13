import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shopifyImg from "@/public/shopify.png";
import ankiImg from "@/public/anki.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma in Business Informatics",
    location: "Nanyang Polytechnic, Singapore",
    description:
      "I hold a diploma in Business Informatics, a field that seamlessly integrates the realms of business and information technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Provost Officer",
    location: "Singapore Civil Defence Force",
    description:
      "Supervise a team of 16 NSF personnel making sure day-to-day operations run smoothly,Carrying out Routine Urine Tests on SCDF personnel for potential drug abuse.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Bachelor of Computer Science (Big Data)",
    location: "SIM - University Of Wollongong",
    description:
      "Bachelor's Degree in Computer Science, I specialize in Big Data. This focus equips me with the skills to analyze, visualize, and derive insights from extensive datasets, preparing me for the challenges of data-driven decision-making in a tech-centric world.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Website Development",
    description:
      "Provided professional and user-friendly web development service. URL - www.ohmilkymama.com",
    tags: ["Web Development"],
    imageUrl: shopifyImg,
  },
  {
    title: "Reading Buddy (Anki Vector)",
    description:
      "An interactive game program aimed at enhancing children's reading skills with the use of Anki Vector Robot.",
    tags: ["Artificial Intelligience", "Machine Learning"],
    imageUrl: ankiImg ,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Python",
  "Framer Motion",
  "C#",
  "C++",
  "Java",
  "Oracle SQL",
  "HIVE",
  "Apache Hadoop",
  "Spark",
  "Machine Learning",
  "Data Analytics",


] as const;