import React from "react";
import styled from "styled-components";
import { pageAnimation, titleAnim } from "../Animation";
//Animations
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href = "https://www.linkedin.com/in/tejas-mukherjee/"><h2>Linkedin</h2></a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://github.com/mukherjeetejas/"><h2>Github</h2></a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://www.instagram.com/tejasmukherjee/"><h2>Instagram</h2></a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
    color: #353535;
  }
  h2 {
    margin: 1rem;
  }
`;

export default ContactUs;
