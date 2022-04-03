import React from "react";

// Inspiration - Abstract

export function Resume() {
  return (
    <section className="my-8 pt-8 border-b-0 border-zinc-800 bg-gradient-to-r from-transparent to-zinc-600 overflow-hidden">
      <div className="grid grid-cols-2 gap-8">
        <div className="relative order-last md:order-first col-span-full md:col-span-1 h-60">
          <div className="absolute top-20 bottom-0 right-24 w-3/4 md:w-7/12 bg-zinc-400 rounded-xl rounded-b-none drop-shadow-xl -rotate-12" />
          <div className="absolute top-12 bottom-0 right-16 w-3/4 md:w-7/12 bg-zinc-300 rounded-xl rounded-b-none drop-shadow-lg -rotate-6" />
          <div className="absolute top-4 -bottom-8 right-8 w-3/4 md:w-7/12 bg-zinc-200 rounded-xl rounded-b-none drop-shadow-md -rotate-2 p-6 text-zinc-800">
            Resume???
          </div>
        </div>
        <div className="col-span-full md:col-span-1 flex flex-col justify-center">
          <span className="shrink w-auto bg-zinc-600 text-zinc-300 mb-2 py-1 px-2 text-sm rounded">
            03 - Curriculum Vitae
          </span>
          <div className="my-4">
            <h3 className="text-zinc-200 text-2xl sm:text-3xl md:text-4xl">
              Available for Part-Time Contracts
            </h3>
            <p className="mt-2 text-xl text-zinc-400">
              ATS-Parsing and Max-Offer friendly.
            </p>
            <a className="shrink inline-block w-auto mt-4 py-2 px-3 bg-zinc-300 hover:bg-zinc-400 text-zinc-700 text-sm cursor-pointer rounded-md">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
