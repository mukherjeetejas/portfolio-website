import React from "react"
import port from "../images/portfolio-image.jpg"
import { AboutStyles, Description, Image, Hide } from "../styles";

const AboutSection = () => {
    return (
        <AboutStyles>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Tejas Mukherjee</h2>
                    </Hide>
                    <Hide>
                        <h2>Web <span>Developer</span></h2>
                    </Hide>
                    <Hide>
                        <h2>Data Analyst</h2>
                    </Hide>
                </div>
                <p>Contact me for any web development or machine learning projects / internship opportunities</p>
                <button>Contact me</button>
            </Description>
            <Image>
                <img src={port} alt="portfolio"/>
            </Image>
        </AboutStyles>
    )
}

export default AboutSection