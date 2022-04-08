import Link from "next/link";
import React, { useState } from "react";

// Inspiration - Attio

export function WorkHistory() {
  const [workHistory] = useState([
    {
      order: "1",
      company: "MGM Resorts International",
      role: "Senior Frontend Engineer",
      contractor: true,
      points: [
        "Migrate to Micro-FE Architecture",
        "Build DX Tooling w/ Webpack",
        "p3",
      ],
      tenure: {
        start: "Nov 8, 2022",
        end: "Current",
      },
    },
    {
      order: "2",
      company: "Superformula",
      role: "Senior Frontend Engineer",
      contractor: "",
      points: ["Support Clients as a FE", "p2", "p3"],
      tenure: {
        start: "Nov 8, 2022",
        end: "Current",
      },
    },
    {
      order: "3",
      company: "Smart Mobile Solutions",
      role: "Lead Frontend Engineer",
      contractor: "",
      points: [
        "Lead 4-person FE Product Team",
        "Design scalable microservice-APIs",
        "Standardize Code Quality & Tooling",
        "Implement Animated Interactive UIs",
      ],
      tenure: {
        start: "Nov 8, 2022",
        end: "Current",
      },
    },
    {
      order: "4",
      company: "Advantage General Insurance",
      role: "Senior Software Engineer",
      contractor: "",
      points: [
        "Deploy Kiosk & Mobile Applications ",
        "Migrate Secure Paper-less Tools",
        "Launch Policy Processing Platform",
        "Extend Underwriting APIs",
      ],
      tenure: {
        start: "Nov 8, 2022",
        end: "Current",
      },
    },
    {
      order: "5",
      company: "A&S Technosoft",
      role: "Junior Software Engineer",
      contractor: "",
      points: [
        "Develop Modular Micro Frontends",
        "Design Performant Graph Queries",
        "p3",
      ],
      tenure: {
        start: "Nov 8, 2022",
        end: "Current",
      },
    },
    {
      order: "6",
      company: "Juici Beef Limited",
      role: "Information Technology Officer",
      contractor: "",
      points: ["p1", "p2", "p3"],
      tenure: {
        start: "Nov 8, 2022",
        end: "Current",
      },
    },
  ]);
  return (
    <section className="py-8 border-y-0 border-zinc-800">
      <div className="relative grid grid-cols-12 grid-rows-2 gap-12">
        {workHistory.map((work) => (
          <div
            key={work.company}
            className="z-[1] relative overflow-clip bg-zinc-800 col-span-full sm:col-span-6 md:col-span-4 flex flex-col rounded-lg md:rounded-2xl"
          >
            <div className="p-4 md:p-8">
              <span className="absolute -bottom-6 right-1 text-8xl text-white/5">
                {work.order}
              </span>
              <h3 className="text-2xl">{work.company}</h3>
              <p className="mt-1 text-lg text-zinc-500">{work.role}</p>
              <ul className="mt-2 list-disc list-inside text-md">
                {work.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {/* <div className="hidden md:block absolute top-1/2 inset-x-0 col-span-full row-start-1 row-end-2 border-4 border-dashed border-zinc-400 drop-shadow-xl" /> */}
        {/* <div className="hidden md:block absolute top-1/2 inset-x-0 col-span-full row-start-2 row-end-2 border-4 border-dashed border-zinc-400 drop-shadow-xl" /> */}
        {/* <div className="hidden md:block absolute right-1/2 inset-y-0 col-start-9 col-end-13 row-span-full border-4 border-dashed border-zinc-400 drop-shadow-xl" /> */}
      </div>
    </section>
  );
}

export default WorkHistory;
