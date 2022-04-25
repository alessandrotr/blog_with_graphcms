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
        <CommentsCount
          post={post}
          customClass="text-xs px-2 py-1"
          iconClass="text-sm"
          categoryColor={categoryColor}
        />
        <CreatedAtBadge
          postCreatedAt={post.createdAt}
          customClass="px-2 "
          showIcon
          categoryColor={categoryColor}
          post={post}
        />
        {post.categories.map((category) => (
          <CategoryBadge key={category.name} category={category} onlyIcon />
        ))}
      </div>
    </>
  );
};

export default RecentOrRelatedPost;
