import React, { useState } from "react";
// import Link from "next/link";

// Inspiration - Abstract

export function Introduction() {
  const [testimonials] = useState([
    {
      name: "Friend #1",
      image: "",
      review:
        "He's aight, could be better. Kinda weird, smells like baby wipe showers and mountain dew.",
    },
    {
      name: "Friend #2",
      image: "",
      review:
        "He's aight, could be better. Kinda weird, smells like baby wipe showers and mountain dew.",
    },
    {
      name: "Friend #3",
      image: "",
      review:
        "He's aight, could be better. Kinda weird, smells like baby wipe showers and mountain dew.",
    },
    {
      name: "Friend #4",
      image: "",
      review:
        "He's aight, could be better. Kinda weird, smells like baby wipe showers and mountain dew.",
    },
  ]);

  return (
    <section className="py-0 md:py-8 border-b-0 border-zinc-800">
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-full md:col-span-3">
          <span className="inline-block bg-zinc-600/75 text-zinc-300 mb-2 py-1 px-2 text-sm rounded">
            01 - Introduction
          </span>
          <div className="my-4">
            <h1 className="text-zinc-500 text-4xl sm:text-5xl md:text-6xl">
              Hey, <span className="text-zinc-100">I&apos;m Michael</span> and
            </h1>
            <h1 className="text-zinc-500 text-4xl sm:text-5xl md:text-6xl">
              this is <span className="text-zinc-100">Mikeyverse</span> v2.0
            </h1>
          </div>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl text-zinc-400">
            Senior Software Engineer @ Superformula
          </p>
          {/* <input
            type="email"
            name="email"
            className="mt-4 px-4 py-2 w-1/2 bg-zinc-600 border shadow-sm border-zinc-500 placeholder-zinc-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            placeholder="Your email address"
          /> */}
        </div>
        <div className="relative col-span-full md:col-span-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-3 mb-4 flex bg-zinc-800 rounded-xl"
            >
              <div className="h-16 w-16 shrink-0 border-2 border-zinc-400 rounded-lg" />
              <div className="h-16 ml-3">
                <p className="text-sm md:text-base">{testimonial.name}</p>
                <p className="text-ellipsis overflow-hidden text-xs md:text-sm text-zinc-400">
                  {testimonial.review}
                </p>
              </div>
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
