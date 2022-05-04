import React from "react";
import Link from "next/link";
import CreatedAtBadge from "./CreatedAtBadge";
import CommentsCount from "./CommentsCount";
import ImageWithFilter from "./ImageWithFilter";
import CategoryBadge from "./CategoryBadge";

const RecentOrRelatedPost = ({ post }) => {
  let categoryColor = post.categories.map((color) => color.color.hex);

  return (
    <>
      <Link href={`/post/${post.slug}`}>
        <div
          key={post.title}
          className="flex items-center w-full bg-secondaryLight hover:bg-primaryLight dark:bg-secondaryDark dark:hover:bg-primaryDark shadow-lg cursor-pointer"
        >
          <ImageWithFilter small post={post} />

          <div className="inline align-middle font-medium titleRelatedPostOverflow w-8/12 px-4 text-sm leading-normal">
            {post.title}
          </div>
        </div>
      </Link>
      <div className="flex w-full justify-end mb-5">
        <div className="flex mt-3 items-center text-secondaryDark dark:text-secondaryLight">
          <CreatedAtBadge
            postCreatedAt={post.createdAt}
            categoryColor={categoryColor}
            customClass="mr-2 text-secondaryDark dark:text-secondaryLight font-normal text-xs"
          />
          |
          <CommentsCount
            post={post}
            categoryColor={categoryColor}
            customClass="mx-2 text-secondaryDark dark:text-secondaryLight text-xs"
          />
          |
          {post.categories.map((category) => (
            <CategoryBadge
              key={category.name}
              category={category}
              customClass="mx-2 text-secondaryDark dark:text-secondaryLight text-xs"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentOrRelatedPost;
