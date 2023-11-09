"use client";

import React, { useEffect }from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';


export default function About() {
  const {ref} = useSectionInView("About");

  return (
  <motion.section
  ref={ref}
  className="mb-28 max-w-[45rem]
  text-center leading-8 sm:mb-40 scroll-mt-28"
   initial={{ opacity: 0 , y:100 }}
   animate={{ opacity: 1 , y:0 }}
   transition={{ delay: 0.175 }} 
   id="about"
  >
    <SectionHeading>About Me</SectionHeading>
    <p className="mb-3">
        After graduating with a diploma in{" "}
        <span className="font-medium">Business Informatics</span>, I decided to pursue my
        passion for programming. I enrolled in a university and studied{" "}
        <span className="font-medium">Computer Science</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Java , C# , C++ , and Python
        </span>
        . I am also familiar with Oracle SQL , MongoDB and Web development. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
    </p>

    <p>
        <span className="italic">When i am not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">new web technologies</span>
    </p>

  </motion.section>

  );
}
