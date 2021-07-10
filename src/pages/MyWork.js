import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProjectData from "../components/ProjectData";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const MyWork = () => {
  const myworks = ProjectData.map(work => (
    <Movie>
      <h2>{work.name}</h2>
      <div className="line"></div>
      <Link to={"/work/" + work.name}>
        <img src={work.image} alt="athlete" />
      </Link>
    </Movie>
  ));
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      {myworks}
    </Work>
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
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: gray;
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default MyWork;
