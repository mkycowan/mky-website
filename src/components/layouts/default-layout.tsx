import React, { Fragment } from "react";
import { NavigationBar } from "@components/navigation-bar";
import { FooterBar } from "@components/footer-bar";

function DefaultLayout({ children }: any) {
  return (
    <Fragment>
      <NavigationBar />
      <div className="container flex-1 mx-auto px-4 py-8 bg-zinc-700">
        DefaultLayout
        {children}
      </div>
      <FooterBar />
    </Fragment>
  );
}

export { DefaultLayout };
