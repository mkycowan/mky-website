import { MenuIcon } from "@utils/icons";
import Link from "next/link";
import React from "react";

export function NavigationBar() {
  return (
    // <nav className="sticky top-0 z-10 container max-w-7xl mx-auto px-6 pt-6 pb-2 lg:px-10 lg:pb-6">
    //   <div className="py-6 px-4 lg:px-8 rounded-lg backdrop-blur-md bg-zinc-800/50">
    //     <Link href="/">MKY ✦</Link>
    //   </div>
    // </nav>
    <nav className="flex items-center justify-between container max-w-7xl mx-auto px-6 py-6 lg:px-10 lg:py-10">
      <div className="text-xl md:text-2xl">
        <Link href="/" passHref>
          <div className="cursor-pointer">
            Mikey ✦{" "}
            <span className="ml-2 pl-3 sm:ml-3 sm:pl-4 text-md md:text-2xl border-l-2 border-zinc-500">
              Portfolio + Blog
            </span>
          </div>
        </Link>
      </div>
      <div className="text-lg">
        <div className="hidden lg:flex">
          <Link href="/about">
            <a className="mr-6">About</a>
          </Link>
          <Link href="/work">
            <a className="mr-6">Portfolio</a>
          </Link>
          <Link href="/blog">
            <a className="mr-6">Blog</a>
          </Link>
          <Link href="/shop">
            <a className="">Shop</a>
          </Link>
        </div>
        <div className="lg:hidden p-1.5 rounded-sm bg-zinc-600">
          <MenuIcon className="h-6" />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
