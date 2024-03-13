"use client";

import React from 'react'
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
    {/* <p className="mb-3">
        After graduating with a diploma📑 in{" "}
        <span className="font-medium">Business Informatics</span>, I decided to pursue my
        passion for programming. I enrolled in a university🏫 and studied{" "}
        <span className="font-medium">Computer Science💻</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem🧩. 
    </p> */}

    &nbsp;
    &nbsp;

    <p>

    A <span className="font-medium">proactive and detail-oriented individual👨‍💻</span> with a keen analytical mind, I excel in the fast-paced tech 
    industry, particularly in <span className="font-medium">machine learning and software engineering.</span> My robust problem-solving capabilities 
    are matched by a rapid learning curve and a talent for juggling multiple tasks efficiently. With a <span className="font-medium">strong 
    foundation in algorithm development and data analysis</span>, I am committed to driving innovation and 
    delivering solutions that harness the power of technology🌍.
        
    </p>

    &nbsp;
    &nbsp;

  </motion.section>

  );
}
