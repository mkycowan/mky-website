import React from "react";
import Head from "next/head";

function PostLayout({ meta, children }: any) {
  const metaData = { ...meta };
  return (
    <div>
      <Head>
        <title>MKY - {metaData?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      PostLayout
      <article className="">{children}</article>
      <p>Written by: {metaData?.author}</p>
    </div>
  );
}

export { PostLayout };
