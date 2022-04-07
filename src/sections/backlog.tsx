// import Link from "next/link";
import React from "react";

// Inspiration - Attio

export function Backlog() {
  return (
    <section className="py-8 border-y-0 border-zinc-800">
      <div className="flex flex-col items-end">
        <span className="bg-zinc-600/75 w-fit text-zinc-300 py-1 px-2 text-sm rounded">
          04 - Blogs and Tutorials
        </span>
        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl">
          --- The Backlog
        </h2>
        <p className="mb-8 sm:w-8/12 lg:w-6/12 text-zinc-500">
          The backlog is a journal of entries where I explore technologies and
          engineering topics I should know but don't feel like I do. <br />
          Yes, this section is purely an attempt to remedy my imposter syndrome.
        </p>
      </div>
    </section>
  );
}

export default Backlog;
