import React from "react";
import Link from "next/link";
import CategoryBadge from "./ui/CategoryBadge";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import { GiRead } from "react-icons/gi";
import ImageWithFilter from "./ui/ImageWithFilter";
import ReadMoreButton from "./ui/ReadMoreButton";

const PrincipalPostCard = ({ post }) => {
  let categoryColor = post.categories.map((color) => color.color.hex);

  return (
    <div className="relative h-96 flex items-end">
      <ImageWithFilter post={post} big />
      <div className="flex justify-start absolute left-0 bottom-0 w-full">
        {post.categories.map((category) => (
          <CategoryBadge key={category.name} category={category} />
        ))}
        <CreatedAtBadge
          postCreatedAt={post.createdAt}
          categoryColor={categoryColor}
          customClass=""
          showIcon
        />
        <CommentsCount
          post={post}
          categoryColor={categoryColor}
          customClass="pr-4"
        />
      </div>
      <div className="flex flex-col py-12 pb-20 px-10 justify-center w-6/12 z-10 shadow-lg">
        <Link href={`/post/${post.slug}`}>
          <p className=" leading-relaxed text-secondaryDark dark:text-secondaryLight cursor-pointer mb-4 font-semibold text-2xl lg:text-4xl underline decoration-transparent hover:decoration-[#5865f2]">
            {post.title}
          </p>
        </Link>
        <span className="pr-24">
          <ExcerptWithOverflow>{post.excerpt}</ExcerptWithOverflow>
        </span>
        <ReadMoreButton
          categoryColor={categoryColor}
          post={post}
          customClass="mt-8 absolute w-full flex justify-end bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default PrincipalPostCard;
