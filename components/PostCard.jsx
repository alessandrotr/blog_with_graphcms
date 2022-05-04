import React from "react";
import moment from "moment";
import Link from "next/link";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CategoryBadge from "./ui/CategoryBadge";
import CommentsCount from "./ui/CommentsCount";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import ImageWithFilter from "./ui/ImageWithFilter";
import ReadMoreButton from "./ui/ReadMoreButton";

const PostCard = ({ post }) => {
  let categoryColor = post.categories.map((color) => color.color.hex);

  return (
    <div className="relative h-72 flex mb-12 items-end">
      <ImageWithFilter medium post={post} />
      <div className="flex flex-col px-8 justify-center w-6/12 z-10 h-full">
        {post.categories.map((category) => (
          <CategoryBadge
            key={category.name}
            category={category}
            customClass="bg-colorItems2 text-primaryDark p-1 mb-4 uppercase max-w-max font-medium"
          />
        ))}

        <Link href={`/post/${post.slug}`}>
          <h2 className=" leading-normal text-primaryDark dark:text-secondaryLight cursor-pointer mb-4 font-medium underline decoration-transparent hover:decoration-[#5865f2] text-xl">
            {post.title}
          </h2>
        </Link>
        <span className="pr-18">
          <ExcerptWithOverflow
            featuredPostCard={true}
            lineClamp="3"
            customClass="text-xs text-primaryDark dark:text-secondaryLight"
          >
            {post.excerpt}
          </ExcerptWithOverflow>
        </span>
        <div className="flex mt-3 items-center text-primaryDark dark:text-secondaryLight">
          <CreatedAtBadge
            postCreatedAt={post.createdAt}
            categoryColor={categoryColor}
            customClass="mr-2 text-primaryDark dark:text-secondaryLight font-normal text-xs"
          />
          |
          <CommentsCount
            post={post}
            categoryColor={categoryColor}
            customClass="ml-2 text-primaryDark dark:text-secondaryLight text-xs"
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

export default PostCard;
