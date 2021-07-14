import React from "react"
import react from "../images/react.png"
import cpp from "../images/cpp.png"
import ml from "../images/ml.png"
import phplogo from "../images/phplogo.png"
import stock from "../images/stock.jpg"
import java from "../images/java.png"
import python from "../images/python.png"
import flask from "../images/flask.jpg"
import mysql from "../images/mysql.png"
//styles
import { AboutStyles, Description, Image } from "../styles";
import styled from "styled-components";
//motion 
import {scrollReveal} from "../Animation";
import {useScroll } from "./useScroll"

const Services = () => {
  const [elements , controls ] = useScroll()
    return (
    <ServicesStyle variants={scrollReveal} animate={controls} initial="hidden" ref = {elements}>
        <Description>
            <h2>Technical <span>Stack</span></h2>
            <Cards>
                <Card>
                    <div className="icon">
                        <img src={react} alt="react"/>
                        <h3>React</h3>
                    </div>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={cpp} alt="react"/>
                        <h3>Problem Solving</h3>
                    </div>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={ml} alt="react"/>
                        <h3>Machine Learning</h3>
                    </div>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={phplogo} alt="react"/>
                        <h3>PHP</h3>
                    </div>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={mysql} alt="react"/>
                        <h3>MYSQL</h3>
                    </div>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={java} alt="react"/>
                        <h3>Java</h3>
                    </div>
                </Card>
                <Card>
                    <div className="icon">
                        <img src={python} alt="react"/>
                        <h3>Python</h3>
                    </div>
                    </Card>
                    <Card>
                    <div className="icon">
                        <img src={flask} alt="react"/>
                        <h3>Flask</h3>
                    </div>
                </Card>
            </Cards>
        </Description>
        <Image>
            <img src={stock} alt="service"/>
        </Image>
    </ServicesStyle>
    )
}

const ServicesStyle = styled(AboutStyles)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  padding: 2.5%;
  flex-basis: 14rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      color: white;
      padding: 1rem;
      font-family: 'Inter', sans-serif;
    }
    img{
        height: 80px;
        width: 80px;
    }
  }
`;

export default Services