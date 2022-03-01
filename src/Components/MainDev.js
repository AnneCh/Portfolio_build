// Introduce quickly why blockchain developer with option to read more about it (links to an 
//additional page where I'll either write or make a video of why I chose it

// Then list languages that I'm learning 

// Then A few (3) images or boxes that link to the major projects I'm undertaking (github)

// then a link to WhatElse and one to the Multimedia part and Contact 

import React from "react";
import { Container, Link } from '@mui/material';

export default function About() {
    return (
        <section id="about">
            <Container className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <Container className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    BlockChain Developer
                        <br className="hidden lg:inline-block" />You may ask, "but why Blockchain?"
                        Different experiences lead me to look for an alternative to the system I was brought up in. I was no longer convinced
                        that what I what been used to would allow me to reach the goals that I had set for myself and my team.
                        When I got introduced to the blockchain concept and Bitcoin, like most of us, I was dubitative. <br></br>
                        
                        Then, the more I gathered data, the more I caught myself thinking that, maybe, this could work.
                        Maybe this system based on decentralization could lead to a more favorable ground to bridge the gaps.
                        

                        It looked like the best option from all the ones I had heard so far, and giving 
                        my limited financial means, investing was out of reach.
                        Between learning trading and coding, I opted for coding, as it had been on my mind for a long time.

                        So I dived into it, on October 2021.
                        <Link src="src/Components/Developper/Why Blockchain.js">(Read more..)</Link>

                    </h1>
                    <Container className="flex justify-center">
                        <a href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Direct contact
                        </a>
                        <a href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Projects
                        </a>
                        <a href="#whatelse"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            What else do you want to know?
                        </a>
                    </Container>
                </Container>
            </Container>
        </section>
    )
}