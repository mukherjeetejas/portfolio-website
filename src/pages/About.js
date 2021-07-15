import React from "react";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Faq from "../components/Faq";
import Resume from "../components/Resume";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <Services />
      <Faq />
      <Resume/>
    </motion.div>

  );
};

export default About;
