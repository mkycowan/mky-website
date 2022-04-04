import React from "react";

export function FooterBar() {
  return (
    <footer className="container max-w-7xl mx-auto px-6 py-8 flex items-start justify-between">
      <div>© MKY {new Date().getFullYear()} | Portfolio + Blog</div>
      <div>Sitemap</div>
    </footer>
  );
}

export default FooterBar;
