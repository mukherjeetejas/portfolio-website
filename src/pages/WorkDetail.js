import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import ProjectData from "../components/ProjectData";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const WorkDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [currMovie] = useState(ProjectData.filter(work => work.url === url));
  console.log(currMovie);
  return (
    <Details
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <HeadLine>
        <h2>{currMovie[0].name}</h2>
        <img src={currMovie[0].image} alt="movie" />
      </HeadLine>
      <Properties>
        {currMovie[0].props.map(prop => (
          <Property
            title={prop.title}
            description={prop.description}
            key={prop.title}
          />
        ))}
      </Properties>
      <ImageDisplay>
        <img src={currMovie[0].image2} alt="movie" />
      </ImageDisplay>
    </Details>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    padding-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    padding-bottom: 5%;
    padding-left: 5%;
    padding-right: 5%;
  }
`;
const Properties = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const PropertyStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
//Award Component
const Property = ({ title, description }) => {
  return (
    <PropertyStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </PropertyStyle>
  );
};

export default WorkDetail;
