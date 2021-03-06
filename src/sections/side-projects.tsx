import Link from "next/link";
import React from "react";

// Inspiration - Attio

export function SideProjects() {
  return (
    <section id="portfolio" className="py-8 border-y-0 border-zinc-800">
      <span className="bg-zinc-600/75 text-zinc-300 py-1 px-2 text-sm rounded">
        03 - Side Projects
      </span>
      <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl">Projects ---</h2>
      <p className="mb-8 sm:w-8/12 lg:w-6/12 text-zinc-500">
        As you can imagine, a lot of my best work is proprietary or covered
        under a NDA. Don&apos;t panic, I am a nocturnal creature of passion.
      </p>
      <div className="grid grid-cols-7 gap-8">
        <div className="bg-zinc-800 h-128 col-span-full md:col-span-4 flex flex-col rounded-lg md:rounded-2xl">
          <div className="p-4 md:p-8">
            <h3 className="text-2xl">01</h3>
            <p className="mt-2 text-zinc-500">Project description</p>
          </div>
          <div className="flex-1 flex items-center justify-center bg-zinc-600/25 ml-4 md:ml-8 rounded-tl-xl rounded-br-xl">
            Preview Container
          </div>
        </div>
        <div className="bg-zinc-800 h-128 col-span-full md:col-span-3 flex flex-col rounded-lg md:rounded-2xl">
          <div className="p-4 md:p-8">
            <h3 className="text-2xl">02</h3>
            <p className="mt-2 text-zinc-500">Project description</p>
          </div>
          <div className="flex-1 flex items-center justify-center bg-zinc-600/25 mx-4 md:mx-8 rounded-t-2xl">
            Preview Container
          </div>
        </div>
        <div className="bg-zinc-800 h-128 col-span-full md:col-span-3 flex flex-col rounded-lg md:rounded-2xl">
          <div className="p-4 md:p-8">
            <h3 className="text-2xl">03</h3>
            <p className="mt-2 text-zinc-500">Project description</p>
          </div>
          <div className="flex-1 flex items-center justify-center bg-zinc-600/25 m-4 md:m-8 mt-0 md:mt-0 rounded-xl">
            Preview Container
          </div>
        </div>
        <div className="bg-zinc-800 h-128 col-span-full md:col-span-4 flex flex-col rounded-lg md:rounded-2xl">
          <div className="p-4 md:p-8">
            <h3 className="text-2xl">04</h3>
            <p className="mt-2 text-zinc-500">Project description</p>
          </div>
          <div className="flex-1 flex items-center justify-center bg-zinc-600/25 m-4 md:m-8 mt-0 md:mt-0 rounded-xl">
            Preview Container
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/portfolio">
          <a className="flex items-center max-w-fit mt-4 py-2 px-5 border hover:bg-zinc-600/50 text-zinc-300 text-lg cursor-pointer rounded-full">
            More Side Projects
          </a>
        </Link>
      </div>
    </section>
  );
}

export default SideProjects;
