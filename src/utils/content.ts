import fs from "fs";
import path from "path";

interface getBlogPostsProps {
  limit?: number;
}

export async function getBlogPosts(params: getBlogPostsProps) {
  const { limit } = params;
  const blogDirectory = path.join(process.cwd(), "/pages/blog");
  let blogFilenames = fs.readdirSync(blogDirectory);

  const articleModules = await Promise.all(
    blogFilenames.map(async (path) => import(`../../pages/blog/${path}`)),
  );

  let articles = articleModules.map((module) =>
    module.meta ? module.meta : null,
  );

  //   Limit
  if (limit && limit < articles.length) {
    console.log("should slice");
    articles = [...articles.slice(0, limit)];
  }

  return articles;
}
