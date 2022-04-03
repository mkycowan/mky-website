import Link from "next/link";
import React from "react";

export function NavigationBar() {
  return (
    <nav className="container max-w-7xl mx-auto px-6 py-8">
      <Link href="/">MKY - Javascript Engineer</Link>
    </nav>
  );
}

export default NavigationBar;
