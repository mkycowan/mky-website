import { DownloadIcon } from "@utils/icons";
import React from "react";

// Inspiration - Abstract / Cloudflare Pages

export function Resume() {
  return (
    <section className="my-8 mb-16 pt-8 border-b-0 border-zinc-800 rounded-lg backdrop-blur-lg bg-zinc-800/50 overflow-hidden">
      <div className="grid grid-cols-2 gap-8">
        <div className="relative order-last md:order-first col-span-full md:col-span-1 h-60">
          <div className="absolute top-20 bottom-0 right-24 w-3/4 md:w-7/12 bg-zinc-400 rounded-xl rounded-b-none drop-shadow-xl -rotate-12" />
          <div className="absolute top-12 bottom-0 right-16 w-3/4 md:w-7/12 bg-zinc-300 rounded-xl rounded-b-none drop-shadow-lg -rotate-6" />
          <div className="absolute top-4 -bottom-8 right-8 w-3/4 md:w-7/12 bg-zinc-100 rounded-xl rounded-b-none drop-shadow-md -rotate-2 py-4 px-2  text-zinc-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348">
              <path
                fill="#bdc2c7"
                d="M20 20h20v20H20zm36-1.3L67.3 30 56 41.3 44.7 30z"
              ></path>
              <circle cx="82" cy="30" r="10" fill="#bdc2c7"></circle>
              <rect
                width="94"
                height="14"
                x="112"
                y="23"
                fill="#d2d2d2"
                rx="7"
              ></rect>
              <path
                fill="#e1e1e1"
                d="M23 70v83h168V70H23zm-3-3h174v89H20V67zM33 96h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 103h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm-13 7h21v3H33zm49 0h21v3H82zm-15 0h11v3H67zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zM58 96h11v3H58zM217 70v83h168V70H217zm-3-3h174v89H214V67zM227 96h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 103h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm-13 7h21v3h-21zm49 0h21v3h-21zm-15 0h11v3h-11zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11zM23 179v83h168v-83H23zm-3-3h174v89H20v-89zM33 205h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 212h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm-13 7h21v3H33zm49 0h21v3H82zm-15 0h11v3H67zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zm-36-14h11v3H58zM217 179v83h168v-83H217zm-3-3h174v89H214v-89zM227 205h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 212h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm-13 7h21v3h-21zm49 0h21v3h-21zm-15 0h11v3h-11zm40 0h11v3h-11zm-49 0h5v3h-5zm37-7h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11zM23 288v83h168v-83H23zm-3-3h174v89H20v-89zM33 314h21v3H33zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3H95zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM87 321h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3H70zm-37 0h9v3h-9zm22 0h11v3H55zm-9 0h5v3h-5zm49 0h5v3h-5zm49-28h8v3h-8zm-96 14h21v3H48zm-15 0h11v3H33zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3H94zm-36-14h11v3H58zM217 288v83h168v-83H217zm-3-3h174v89H214v-89zM227 314h21v3h-21zm77 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm70 0h5v3h-5zm-7 7h5v3h-5zm-79 0h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm102 0h11v3h-11zm8-7h11v3h-11zm-119 7h5v3h-5zm78 0h21v3h-21zM281 321h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm35-7h5v3h-5zm-65 28h21v3h-21zm-37 0h9v3h-9zm22 0h11v3h-11zm-9 0h5v3h-5zm49 0h5v3h-5zm49-28h8v3h-8zm-96 14h21v3h-21zm-15 0h11v3h-11zm40 0h5v3h-5zm9 0h8v3h-8zm22 14h21v3h-21zm46 0h21v3h-21zm-21 0h5v3h-5zm9 0h8v3h-8zm-44-14h11v3h-11zm-36-14h11v3h-11z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-full md:col-span-1 flex flex-col justify-center px-6 md:px-0">
          <span className="bg-zinc-600/75 text-zinc-300 mb-2 py-1 px-2 text-sm rounded rounded-r-none">
            03 - Curriculum Vitae
          </span>
          <div className="my-4">
            <h3 className="text-zinc-200 text-2xl sm:text-3xl md:text-4xl">
              Available for Part-Time Contracts
            </h3>
            <p className="mt-2 text-xl text-zinc-400">
              ATS-Parsing and Max-Offer friendly.
            </p>
            <a className="flex items-center max-w-fit mt-4 py-2 px-5 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-lg cursor-pointer rounded-full">
              Download Resume
              <DownloadIcon className="h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
