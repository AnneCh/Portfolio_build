import React from "react";
import { Container, Paper } from '@mui/material';

export default function About() {
    return (
        <section id="about">
            <Container className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <Container className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi, I'm Anne.
                    <br className="hidden lg:inline-block" />...make yourself comfortable, and stay hydrated. 
                </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm honored you're willing to know more about me.
                    </p>
                    <Container className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Direct contact
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Projects
                        </a>
                        <a
                        href="#whatelse"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Who am I
                        </a>
                    </Container>
                </Container>
                    <img alt="tea" src="tea.png"/>
            </Container>
        </section>
    )
}