export const Categories = [
  "all",
  "interaction",
  "microfrontend",
  "performance",
  "enterprise",
];

export type Category = typeof Categories[number];

export interface ArticleMeta {
  author: string;
  title: string;
  slug: string;
  publishDate: string;
  category: Category;
  featured: boolean;
}
