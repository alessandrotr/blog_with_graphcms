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
      <div className="flex flex-col w-full w-2/4">
        <div className="flex flex-col py-10 px-8 pb-20 justify-center w-full h-8/12 z-10 shadow-lg">
          <Link href={`/post/${post.slug}`}>
            <p className="leading-normal text-secondaryDark dark:text-secondaryLight cursor-pointer mb-4 font-semibold lg:text-xl underline decoration-transparent hover:decoration-[#5865f2]">
              {post.title}
            </p>
          </Link>
          <ExcerptWithOverflow>{post.excerpt}</ExcerptWithOverflow>
          <ReadMoreButton
            categoryColor={categoryColor}
            post={post}
            customClass="mt-4 text-sm absolute w-full left-0 flex items-end justify-end bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
