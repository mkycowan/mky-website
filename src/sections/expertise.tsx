import React from "react";

// Inspiration - Attio

import { AGICIcon, MGMIcon, SFIcon, SFTextIcon, SMSIcon } from "@utils/icons";

export function Expertise() {
  return (
    <section className="py-8 pb-4 border-y-0 border-zinc-800 flex flex-col items-center">
      <span className="bg-zinc-600 text-zinc-300 py-1 px-2 text-sm rounded">
        02 - Skills
      </span>
      <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl">
        --- Expertise ---
      </h2>
      <p className="mb-8 sm:w-8/12 lg:w-6/12 text-center text-zinc-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem ipsa
        quibusdam harum placeat explicabo.
      </p>
      <div className="w-full grid grid-cols-3 gap-8">
        <div className="bg-gradient-to-b from-zinc-800 to-zinc-700/75 p-1 h-auto col-span-full md:col-span-1 flex flex-col rounded-2xl">
          <div className="bg-zinc-800 w-full h-full rounded-xl">
            <div className="p-4 md:p-8 flex flex-col">
              <span className="text-2xl text-zinc-400">01.</span>
              <div className="h-32" />
              <p className="mt-2 text-lg md:text-2xl text-zinc-500">
                <span className="block text-zinc-100">
                  Interactive UI Flows
                </span>
                Project description
              </p>
              <a className="shrink inline-block w-auto mt-4 py-2 px-3 bg-zinc-600 hover:bg-zinc-700 text-sm cursor-pointer rounded-md">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-zinc-800 to-zinc-700/75 p-1 h-auto col-span-full md:col-span-1 flex flex-col rounded-2xl">
          <div className="bg-zinc-800 w-full h-full rounded-xl">
            <div className="p-4 md:p-8 flex flex-col">
              <span className="text-2xl text-zinc-400">02.</span>
              <div className="h-32" />
              <p className="mt-2 text-lg md:text-2xl text-zinc-500">
                <span className="block text-zinc-100">
                  Micro Frontend Architecture
                </span>
                Project description
              </p>
              <a className="shrink inline-block w-auto mt-4 py-2 px-3 bg-zinc-600 hover:bg-zinc-700 text-sm cursor-pointer rounded-md">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-zinc-800 to-zinc-700/75 p-1 h-auto col-span-full md:col-span-1 flex flex-col rounded-2xl">
          <div className="bg-zinc-800 w-full h-full rounded-xl">
            <div className="p-4 md:p-8 flex flex-col">
              <span className="text-2xl text-zinc-400">03.</span>
              <div className="h-32" />
              <p className="mt-2 text-lg md:text-2xl text-zinc-500">
                <span className="block text-zinc-100">Web Performance</span>
                Project description
              </p>
              <a className="shrink inline-block w-auto mt-4 py-2 px-3 bg-zinc-600 hover:bg-zinc-700 text-sm cursor-pointer rounded-md">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 mb-2 text-sm text-zinc-500">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </p>
      <div className="my-6 grid grid-cols-3 lg:grid-cols-5 gap-4 md:gap-12">
        <div className="flex items-center justify-center h-10 md:h-12">
          <MGMIcon />
        </div>
        <div className="flex items-center  justify-center h-10 md:h-12">
          <SFIcon className="h-full" />
          <SFTextIcon className="pl-2 h-10" />
        </div>
        <div className="flex items-center  justify-center h-10 md:h-20">
          {/* Placeholder */}
          <SMSIcon className="h-full" />
        </div>
        <div className="flex items-center  justify-center h-10 md:h-16">
          <AGICIcon className="h-full" />
        </div>
        <div className="flex items-center  justify-center h-10 md:h-12">
          Placeholder
        </div>
      </div>
    </section>
  );
}

export default Expertise;
