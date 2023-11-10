import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shopifyImg from "@/public/shopify.png";
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
      "Studied business informatics, which is a mix of business and IT. I learnt programming, databases, data analytics, business analytics, project management and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Provost Officer",
    location: "Singapore Civil Defence Force",
    description:
      "Supervise a team of 16 NSF personnel making sure day-to-day operations run smoothly,Carrying out Routine Urine Tests on SCDF personnel for potential drug abuse",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Bachelor of Computer Science (Big Data)",
    location: "SIM - University Of Wollongong",
    description:
      "Enrolled in a bachelor's degree in computer science with a focus on big data.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Website Development for Shopify",
    description:
      "Provided professional and user-friendly web development service in shopify and helped a client set-up website for her cookie business. URL - www.ohmilkymama.com",
    tags: ["Shopify"],
    imageUrl: shopifyImg,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
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

] as const;