import React from "react";
import { ArticleMeta } from "utils/types";
import Head from "next/head";
import Link from "next/link";
import { getBlogPosts } from "@utils/content";

interface HomePageProps {
  articles: Array<ArticleMeta>;
}

const Home = ({ articles }: HomePageProps) => {
  return (
    <div>
      <Head>
        <title>MKY - Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>This is my website.</h1>
        {articles.map((article, index) => (
          <Link href={`/blog/${article.slug}`} key={article.slug || index}>
            <h1>{article?.title || ""}</h1>
          </Link>
        ))}
      </main>
      <footer></footer>
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
