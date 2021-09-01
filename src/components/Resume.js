import React from "react"
import styled from "styled-components"
//images
import download from "../images/download.png" 
//<a href={require("../path/to/file.pdf")} download="myFile">Download file</a>
const Resume = () => {
    return (
        // eslint-disable-next-line
        <a href="https://drive.google.com/file/d/1spZkbt3PgvTe4d-8rx13AWDjaFcgimw4/view?usp=sharing" download="myfile" target="_blank" > 
        <StyledDownload src={download} alt="download resume"/>
        </a>
    )
}

const StyledDownload = styled.img`
    position: fixed;
    width: 5%;
    bottom: 20px;
    border: #23d997 3px solid;
    margin: 0 20px 20px 90%;
    z-index: 12;
    @media (max-width: 1300px) {
    display: none;
    }
`

export default Resume