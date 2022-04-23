import React from "react";
import Link from "next/link";
import CategoryBadge from "./ui/CategoryBadge";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import { GiRead } from "react-icons/gi";
import ImageWithFilter from "./ui/ImageWithFilter";

const PrincipalPostCard = ({ post }) => {
  return (
    <div className="relative h-96 flex items-center">
      <ImageWithFilter post={post} big />
      <div className="flex flex-col p-8 justify-center w-7/12 h-full bg-secondaryLight dark:bg-secondaryDark h-3/4 -ml-8 z-10 shadow-lg">
        <CreatedAtBadge
          postCreatedAt={post.createdAt}
          customClass="absolute left-2 top-2"
          showIcon
        />
        <Link href={`/post/${post.slug}`}>
          <p className="text-secondaryDark dark:text-secondaryLight cursor-pointer mb-4 font-semibold text-2xl lg:text-3xl underline decoration-transparent hover:decoration-[#5865f2]">
            {post.title}
          </p>
        </Link>
        <CommentsCount post={post} customClass="absolute left-2 top-12" />
        <ExcerptWithOverflow>{post.excerpt}</ExcerptWithOverflow>
        <div className="flex justify-between items-center mt-8">
          <Link href={`/post/${post.slug}`}>
            <span className="cursor-pointer flex items-center max-w-max">
              <GiRead className="text-colorItems mr-3 text-3xl" />
              <span className="text-primaryDark dark:text-primaryLight border-b border-transparent hover:border-colorItems">
                Read more...
              </span>
            </span>
          </Link>
          <p className="text-secondaryDark font-medium">
            {post.categories.map((category) => (
              <CategoryBadge key={category.name} category={category} />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalPostCard;
