// Overview of Mindbridge Media and me as en entrepreneur

import React from "react";
import { Container } from '@mui/material';

function Background() {
    return(
        <Container>
            <p>My background is marketing. International marketing, to be more precise.<br/> But I've never liked the 
            impression of being a cog in a big machinery, so early on, I aimed at working in small companies.
            So I've created opportunities so I could learn and grow alongside entrepreneurs who inspired me. </p><br/>
            <p></p>
        </Container>
    )
}

function Mindbridge() {
    return(
        <Container>
            In february 2017, I met my husband, musician recently expatriated to Cambodia. He had come with hundreds of kilos of 
            sound system and instruments which he had been buying over the years. <br/> I had reached the end of my contract with
            the NGO I had to come to Cambodia to work for in June 2014, and for a couple of months, I just followed him in his concerts,
            expanding my network and experiencing backstage.
        </Container>
    )
}

function MainMul() {
    return (
        <Container id="mbm">
            <h1>MindBridge Media, bridging experiences and strenghts.</h1>
            <Background/>
        </Container>
    )
}

export default MainMul