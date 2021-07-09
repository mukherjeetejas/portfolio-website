import React from "react"
import styled from "styled-components"

const QuesAns = ({ques,ans}) => {
    return(
        <QuestionStyle>
        <h4>{ques}</h4>
        <div className="answer">
            <p>{ans}</p>
        </div>
        <div className="faq-line"></div>
        </QuestionStyle>
    )
}

const QuestionStyle = styled.div`
    padding: 3rem 0rem;
    cursor: pointer;
    .answer {
    padding: 2rem 0rem;
    p {
    padding: 1rem 0rem;
    }
    }
    .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
    }
`



export default QuesAns