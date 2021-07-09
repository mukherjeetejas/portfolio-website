import React from "react"
import data from "./FaqData"
import QuesAns from "./QuesAns"
import styled from "styled-components"
import { AboutStyles } from "../styles" 

const Faq = () => {
    const faq = data.map((curr) =><QuesAns ques={curr.question} ans={curr.answer} />)
    return (
        <FaqStyles>
            <h2>Any Questions? <span>FAQ</span></h2>
            {faq}
        </FaqStyles>
    )
}

//Styles 
const FaqStyles = styled(AboutStyles)`
    display: block;
    span {
        display: block;
    }
    h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
    }
`
export default Faq