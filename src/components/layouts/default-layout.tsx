import React, { Fragment } from "react";
// import { Banner } from "@components/banner";
import { NavigationBar } from "@components/navigation-bar";
import { FooterBar } from "@components/footer-bar";

function DefaultLayout({ children }: any) {
  return (
    <Fragment>
      {/* <Banner /> */}
      <NavigationBar />
      <div className="container max-w-7xl flex-1 mx-auto px-6 py-6 lg:px-10 bg-zinc-900">
        {children}
      </div>
      <FooterBar />
    </Fragment>
  );
}

export { DefaultLayout };
