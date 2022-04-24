import React from "react";
import Link from "next/link";
import CreatedAtBadge from "./CreatedAtBadge";
import CommentsCount from "./CommentsCount";
import ImageWithFilter from "./ImageWithFilter";

const RecentOrRelatedPost = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div
        key={post.title}
        className="flex items-center w-full mb-8 bg-secondaryLight hover:bg-primaryLight dark:bg-secondaryDark dark:hover:bg-primaryDark shadow-lg cursor-pointer"
      >
        <CreatedAtBadge
          postCreatedAt={post.createdAt}
          customClass="absolute -right-1 px-2 -mt-24"
          showIcon
        />
        <ImageWithFilter small post={post} />

        <div className="inline align-middle font-medium titleRelatedPostOverflow w-8/12 px-4 text-sm leading-normal">
          {post.title}
        </div>
        <CommentsCount
          post={post}
          customClass="absolute left-0 -mb-16 mt-1 text-xs px-2 py-1"
          iconClass="text-sm"
        />
      </div>
    </Link>
  );
};

export default RecentOrRelatedPost;
