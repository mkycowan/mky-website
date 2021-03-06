import React from "react";
import Head from "next/head";

import { ArticleMeta } from "utils/types";
import { getBlogPosts } from "@utils/content";

import { Introduction } from "@sections/introduction";
import { Expertise } from "@sections/expertise";
import { SideProjects } from "@sections/side-projects";
import { Backlog } from "@sections/backlog";

interface HomePageProps {
  articles: Array<ArticleMeta>;
}

const Home = ({ articles }: HomePageProps) => {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Mikey - Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* {articles.map((article, index) => (
          <Link href={`/blog/${article.slug}`} key={article.slug || index}>
            <h1>{article?.title || ""}</h1>
          </Link>
        ))} */}
        <Introduction />
        <Expertise />
        {/* <Resume /> */}
        <SideProjects />
        <Backlog />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const articles = await getBlogPosts({ limit: 0 });
  return {
    props: {
      articles: articles,
    },
  };
}

export default Home;
