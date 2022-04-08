// import Link from "next/link";
import React, { Fragment } from "react";

import { useRouter } from "next/router";

import { Category, Categories } from "@utils/types";
import { SearchIcon } from "@utils/icons";

// Inspiration - Attio

interface ArticleFilterProps {
  selectedCategory: string;
  // selectCategoryHandler: any;
}

export function ArticleFilter({
  selectedCategory,
}: // selectCategoryHandler,
ArticleFilterProps) {
  const router = useRouter();
  return (
    <Fragment>
      <div className="relative p-2 w-fit bg-zinc-800 border-y-0 border-zinc-800 flex flex-row space-x-2 rounded-xl">
        {Categories?.map((category) => (
          <div
            key={category}
            onClick={() =>
              router.push({ pathname: "/blog", query: { category: category } })
            }
            // onClick={() => selectCategoryHandler(category)}
            className={`${
              selectedCategory === category
                ? "bg-black/25 text-white"
                : "text-zinc-300 hover:bg-zinc-700 hover:text-white"
            } px-3 py-2 rounded-md cursor-pointer whitespace-nowrap`}
          >
            {category}
          </div>
        ))}
        <div
          className="px-3 py-2 flex items-center justify-center text-zinc-300 hover:bg-zinc-700 hover:text-white
            rounded-md cursor-pointer"
        >
          <SearchIcon className="h-5 w-5" />
        </div>
      </div>
    </Fragment>
  );
}

export default ArticleFilter;
