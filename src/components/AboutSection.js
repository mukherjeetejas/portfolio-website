import React from "react";
import port from "../images/portfolio-image.jpg";
import { AboutStyles, Description, Image, Hide } from "../styles";
import { Link } from "react-router-dom";
//Animation
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Animation";
//Wave
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <AboutStyles>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Tejas Mukherjee</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Web <span>Developer</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Data Analyst</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact me for any web development or machine learning projects /
          internship opportunities
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} initial="hidden" animate="show" src={port} alt="portfolio" />
      </Image>
      <Wave/>
    </AboutStyles>
  );
};

export default AboutSection;
