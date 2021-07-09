import React from "react"
import react from "../images/react.png"
import cpp from "../images/cpp.png"
import ml from "../images/ml.png"
import phplogo from "../images/phplogo.png"
import stock from "../images/stock.jpg"
//styles
import { AboutStyles, Description, Image } from "../styles";
import styled from "styled-components";

const Services = () => {
    return (
    <ServicesStyle>
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