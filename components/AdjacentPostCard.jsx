import React from "react";
import Link from "next/link";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import CategoryBadge from "./ui/CategoryBadge";

const AdjacentPostCard = ({ post, position, right }) => {
  let categoryColor = post.categories.map((color) => color.color.hex);

  return (
    <>
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-28"
        style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-80 hover:opacity-65 from-gray-400 via-gray-700 to-black w-full h-28" />
      <div className="flex justify-end absolute left-0 top-0 w-full">
        <CommentsCount
          post={post}
          categoryColor={categoryColor}
          customClass="pl-4"
        />
        <CreatedAtBadge
          postCreatedAt={post.createdAt}
          categoryColor={categoryColor}
          customClass=""
          showIcon
        />
        {post.categories.map((category) => (
          <CategoryBadge key={category.name} category={category} onlyIcon />
        ))}
      </div>
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full px-4">
        <p
          style={{ maxWidth: "230px" }}
          className={`text-secondaryLight mb-2 text-shadow font-semibold text-sm w-3/4 absolute ${
            right ? "bottom-2 left-3" : "bottom-2 right-3 text-right"
          }`}
        >
          {post.title}
        </p>
      </div>
      <Link href={`/post/${post.slug}`}>
        <span className="z-10 cursor-pointer absolute w-full h-full" />
      </Link>
      {position === "LEFT" && (
        <div
          style={{ color: categoryColor }}
          className="absolute arrow-btn left-0 bottom-0 text-center cursor-pointer py-2 bg-primaryDarkOpacity flex justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <div
          style={{ color: categoryColor }}
          className="absolute arrow-btn right-0 bottom-0 text-center cursor-pointer py-2 bg-primaryDarkOpacity flex justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
