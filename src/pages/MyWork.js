import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProjectData from "../components/ProjectData";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, slider, sliderContainer, lineAnim } from "../Animation";

const MyWork = () => {
  const myworks = ProjectData.map(work => (
    <Container>
      <motion.h2 variants={fade}>{work.name}</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Link to={"/work/" + work.name}> <Hide>
        <motion.img variants={photoAnim} src={work.image} alt="athlete" />
        </Hide>
      </Link>
    </Container>
  ));
  return (
  <>

    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
    <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      {myworks}
    </Work>
  </>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    text-align: center;
    padding: 1rem 0rem;
    color: white;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;
const Container = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background:#23d997;
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default MyWork;
