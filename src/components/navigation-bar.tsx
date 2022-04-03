import Link from "next/link";
import React from "react";

export function NavigationBar() {
  return (
    // <nav className="sticky top-0 z-10 container max-w-7xl mx-auto px-6 pt-6 pb-2 lg:px-10 lg:pb-6">
    //   <div className="py-6 px-4 lg:px-8 rounded-lg backdrop-blur-md bg-zinc-800/50">
    //     <Link href="/">MKY ✦</Link>
    //   </div>
    // </nav>
    <nav className="container max-w-7xl mx-auto px-6 pt-8 pb-2 lg:px-10 lg:pb-6">
      <div className="text-2xl">
        <Link href="/">Mikey ✦</Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
