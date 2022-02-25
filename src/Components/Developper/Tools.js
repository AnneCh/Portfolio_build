// This document is going to pull from the data.js list of Tools and display what we want where we want it

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { tools } from "../data";

export default function Tools() {
    return (
        <section id="tools">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <ChipIcon className="w-10 inline-block mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Tools used
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Programming is a tool box.
                Frameworks, languages, hardware, programs.
                Waht are your favorite ones, and why?
                Here is those I've been getting familiar with.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {tools.map((tool) => (
                <div key={tool} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      {tool}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }
    