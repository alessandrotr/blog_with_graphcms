import React from "react";
import Link from "next/link";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CommentsCount from "./ui/CommentsCount";

const AdjacentPostCard = ({ post, position }) => {
  return (
    <>
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
        style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full px-20">
        <CreatedAtBadge
          postCreatedAt={post.createdAt}
          customClass="absolute left-2 top-2"
          showIcon
        />
        <p className="text-secondaryLight mb-4 text-shadow font-semibold text-2xl">
          {post.title}
        </p>
        <CommentsCount post={post} customClass="absolute right-2 top-2" />

        <ExcerptWithOverflow featuredPostCard={true}>
          {post.excerpt}
        </ExcerptWithOverflow>
      </div>
      <Link href={`/post/${post.slug}`}>
        <span className="z-10 cursor-pointer absolute w-full h-full" />
      </Link>
      {position === "LEFT" && (
        <div className="absolute  arrow-btn left-0 bottom-0 text-center py-3 cursor-pointer bg-colorItems flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
      )}
      {position === "RIGHT" && (
        <div className="absolute  arrow-btn right-0 bottom-0 text-center py-3 cursor-pointer bg-colorItems flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default AdjacentPostCard;
