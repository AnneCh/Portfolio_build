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

function MainMul() {
    return (
        <Container id="mbm">
            <h1>MindBridge Media, bridging experiences and strenghts.</h1>
            <Background/>
        </Container>
    )
}

export default MainMul