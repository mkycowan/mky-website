/* eslint-disable @next/next/no-img-element */
import {
  ArrowDownIcon,
  CalendarIcon,
  GitHubIcon,
  LinkedInIcon,
  MapPinIcon,
  TwitterIcon,
  UserIcon,
} from "@utils/icons";
import Link from "next/link";
import React, { useState } from "react";
// import Link from "next/link";

// Inspiration - Abstract

export function Profile() {
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
      {/* <div className="flex flex-col items-start sm:flex-row sm:items-end bg-gray-700">
        <div className="flex-1 flex justify-end">
          <a className="flex items-center max-w-fit py-2 px-5 bg-zinc-300 hover:bg-zinc-400 text-zinc-700 text-md whitespace-nowrap cursor-pointer rounded-md">
            <TwitterIcon className="h-5 mr-2" />
            Follow Me
          </a>
          <a className="flex items-center justify-center h-10 w-10 ml-4 bg-zinc-600 hover:bg-zinc-700 text-zinc-400 text-md cursor-pointer rounded-full">
            <GitHubIcon className="h-5" />
          </a>
          <a className="flex items-center justify-center h-10 w-10 ml-2 bg-zinc-600 hover:bg-zinc-700 text-zinc-400 text-md cursor-pointer rounded-full">
            <GitHubIcon className="h-5" />
          </a>
        </div>
      </div> */}
      <div className="flex items-center">
        <h2 className="text-3xl">Michael Cowan</h2>
      </div>
      {/* Info */}
      <div className="flex flex-col items-start md:flex-row md:items-center mt-2 md:text-lg text-zinc-500">
        <span className="flex items-center mb-2 mr-4">
          <UserIcon className="h-5 mr-1" /> @mkycowan
        </span>
        <span className="flex items-center mb-2 mr-4">
          <MapPinIcon className="h-5 mr-1" /> Jamaica
        </span>
        <span className="flex items-center mb-2">
          <CalendarIcon className="h-5 mr-1" /> Coding since 2019
        </span>
      </div>
      {/* Description */}
      <div className="flex items-center mt-1 text-lg text-zinc-400">
        Software Engineer - Serial Creator - Founder @ Fabrik Software
      </div>
      {/* Stats */}
      <div className="flex flex-col items-start md:flex-row md:items-center mt-2 text-lg text-zinc-500">
        <span className="flex items-center mr-4">
          <span className="text-zinc-200 mr-1">000</span> Companies Worked With
        </span>
        <span className="flex items-center mr-4">
          <span className="text-zinc-200 mr-1">000</span> Projects Launched
        </span>
        <span className="flex items-center">
          <span className="text-zinc-200 mr-1">000</span> Ventures
        </span>
      </div>
      {/* <div className="grid grid-cols-5 gap-8">
        <div className="col-span-full md:col-span-3">
          <span className="inline-block bg-zinc-600/75 text-zinc-300 mb-2 py-1 px-2 text-sm rounded">
            01 - About
          </span>
          <div className="my-4 text-4xl sm:text-5xl lg:text-6xl">
            <h1>
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
      </div> */}
    </section>
  );
}

export default Profile;
