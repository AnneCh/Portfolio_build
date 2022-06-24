import React from "react";
import { Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material';

// Introduce quickly why blockchain developer with option to read more about it (links to an 
//additional page where I'll either write or make a video of why I chose it

// Then list languages that I'm learning 

// Then A few (3) images or boxes that link to the major projects I'm undertaking (github)

// then a link to WhatElse and one to the Multimedia part and Contact 

function BoldText({children}) {
    return <span style={{fontWeight: 'bold'}}>{children}</span>;
  }

function MainDev() {
    return (
        <Container className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <h1>BlockChain Developer</h1>
            <br className="hidden lg:inline-block" />
            <p>You may ask, "but why <BoldText>Blockchain</BoldText>?" Different experiences lead me to look for an alternative to the system I was brought up in. I was no longer convinced
                        that what I what been used to would allow me to reach the goals that I had set for myself and my team.
                        When I got introduced to the blockchain concept and Bitcoin, like most of us, I was dubitative. <br></br>
                                
                        Then, the more I gathered data, the more I caught myself thinking that, maybe, this could work.
                        Maybe this system based on decentralization could lead to a more favorable ground to bridge the gaps.<br/>

                        It looked like the best option from all the ones I had heard so far, and giving my limited financial means, investing was out of reach.
                        Between learning trading and coding, I opted for coding, as it had been on my mind for a long time.

                        So I dived into it, in October 2021.<Link to="/WhyBlockchain">(Read more..)</Link>
            </p>
         </Container>
    )
}

export default MainDev;