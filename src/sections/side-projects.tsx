import React from "react";

// Inspiration - Attio

export function SideProjects() {
  return (
    <section className="py-8 border-y-0 border-zinc-800">
      <span className="bg-zinc-600/75 text-zinc-300 py-1 px-2 text-sm rounded">
        04 - Side Projects
      </span>
      <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl">
        --- Projects ---
      </h2>
      <p className="mb-8 sm:w-8/12 lg:w-6/12 text-zinc-500">
        As you can imagine, a lot of my best work is proprietary or covered
        under a NDA. Don&apos;t panic, I am a nocturnal creature of passion.
      </p>
      <div className="grid grid-cols-7 gap-8">
        <div className="bg-zinc-800 h-128 col-span-full md:col-span-4 flex flex-col rounded-2xl">
          <div className="p-4 md:p-8">
            <h3 className="text-2xl">01</h3>
            <p className="mt-2 text-zinc-500">Project description</p>
          </div>
          <div className="w-full flex-1 bg-zinc-600/25">
            {" "}
            Preview Container{" "}
          </div>
        </div>
        <div className="bg-zinc-800 h-128 col-span-full md:col-span-3 flex flex-col rounded-2xl">
          <div className="p-4 md:p-8">
            <h3 className="text-2xl">02</h3>
            <p className="mt-2 text-zinc-500">Project description</p>
          </div>
          <div className="w-full flex-1 bg-zinc-600/25">
            {" "}
            Preview Container{" "}
          </div>
        </div>
        <div className="bg-zinc-800 h-128 col-span-full md:col-span-3 flex flex-col rounded-2xl">
          <div className="p-4 md:p-8">
            <h3 className="text-2xl">03</h3>
            <p className="mt-2 text-zinc-500">Project description</p>
          </div>
          <div className="w-full flex-1 bg-zinc-600/25">
            {" "}
            Preview Container{" "}
          </div>
        </div>
        <div className="bg-zinc-800 h-128 col-span-full md:col-span-4 flex flex-col rounded-2xl">
          <div className="p-4 md:p-8">
            <h3 className="text-2xl">04</h3>
            <p className="mt-2 text-zinc-500">Project description</p>
          </div>
          <div className="w-full flex-1 bg-zinc-600/25">
            {" "}
            Preview Container{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideProjects;
