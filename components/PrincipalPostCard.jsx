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
      <div className="flex flex-col px-8 justify-center w-6/12 z-10 h-full">
        {post.categories.map((category) => (
          <CategoryBadge
            key={category.name}
            category={category}
            customClass="bg-colorItems2 text-primaryDark p-1 mb-4 uppercase max-w-max font-medium"
          />
        ))}

        <Link href={`/post/${post.slug}`}>
          <h2 className=" leading-normal text-secondaryLight cursor-pointer mb-4 font-semibold underline decoration-transparent hover:decoration-[#5865f2] text-3xl">
            {post.title}
          </h2>
        </Link>
        <span className="pr-18">
          <ExcerptWithOverflow customClass="text-secondaryLight">
            {post.excerpt}
          </ExcerptWithOverflow>
        </span>
        <div className="flex mt-3 items-center text-secondaryLight">
          <CreatedAtBadge
            postCreatedAt={post.createdAt}
            categoryColor={categoryColor}
            customClass="mr-2 text-secondaryLight font-normal text-xs"
          />
          |
          <CommentsCount
            post={post}
            categoryColor={categoryColor}
            customClass="ml-2 text-secondaryLight text-xs"
          />
        </div>
        {/* <ReadMoreButton
          categoryColor={categoryColor}
          post={post}
          customClass="mt-8 absolute w-full flex justify-end bottom-0 left-0"
        /> */}
      </div>
    </div>
  );
};

export default PrincipalPostCard;
