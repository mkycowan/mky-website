import {
  ArrowDownIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@utils/icons";
import Link from "next/link";
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
          <div className="my-4 text-4xl sm:text-5xl lg:text-6xl">
            <h1 className="">
              JavaScript Software Engineer{" "}
              <span className="text-zinc-500">
                with a passion for UX &amp; DX.
              </span>
            </h1>
          </div>
          <p className="mt-6 mb-4 text-lg sm:text-2xl md:text-2xl text-zinc-400">
            Software Engineer @ Superformula
            <br />
            Building interactive interfaces and intuitive workflows.
          </p>
          <div className="flex items-center mt-6">
            <Link href="#portfolio">
              <a className="shrink flex items-center w-auto py-2 px-5 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-lg cursor-pointer rounded-full">
                <span className="whitespace-nowrap">View Portfolio</span>
                <ArrowDownIcon className="h-5 ml-2" />
              </a>
            </Link>
            <div className="py-3 px-5 ml-6 grid grid-cols-3 gap-x-3 rounded-full bg-zinc-800">
              <Link href="/" passHref>
                <TwitterIcon className="h-5 ml-1 text-zinc-300 hover:text-zinc-200 cursor-pointer" />
              </Link>
              <Link href="/" passHref>
                <GitHubIcon className="h-5 text-zinc-300 hover:text-zinc-200 cursor-pointer" />
              </Link>
              <Link href="/" passHref>
                <LinkedInIcon className="h-5 text-zinc-300 hover:text-zinc-200 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="mt-8 flex items-center text-zinc-500">
            <div className="">
              <span className="text-zinc-300">124+</span> Tutorials / Articles
            </div>
            <div className="ml-4 pl-4  border-l-2 border-zinc-600">
              <span className="text-zinc-300">124+</span> Components / Snippets
            </div>
          </div>
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
