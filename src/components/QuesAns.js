import React, { useState } from "react"
import styled from "styled-components"
import {motion, AnimateSharedLayout} from "framer-motion"

const QuesAns = ({ques,ans}) => {
    const [toggle, setToggle] = useState(false)
    return(
        <AnimateSharedLayout>
        <QuestionStyle layout>
        <motion.h4 layout onClick = {()=>setToggle(!toggle)}>{ques}</motion.h4>
        {toggle && <div className="answer">
            <p>{ans}</p>
        </div>}
        <div className="faq-line"></div>
        </QuestionStyle>
        </AnimateSharedLayout>
    )
}

const QuestionStyle = styled(motion.div)`
    padding: 3rem 0rem;
    cursor: pointer;
    .answer {
    padding: 2rem 0rem;
    p {
    padding: 1rem 0rem;
    }
    }
    .faq-line {
    background: #23d997;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
    }
`



export default QuesAns