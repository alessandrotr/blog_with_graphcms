import React from "react";
import moment from "moment";
import Link from "next/link";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CategoryBadge from "./ui/CategoryBadge";
import { GiRead } from "react-icons/gi";
import { FaRegComments } from "react-icons/fa";
import CreatedAtBadge from "./ui/CreatedAtBadge";

const PostCard = ({ post, showExcerpt }) => {
  console.log(post);
  return (
    <div className="relative h-72 flex mb-12 items-center">
      <div
        className=" rounded-lg bg-center bg-no-repeat shadow-md inline-block w-2/4 h-72 bg-cover"
        style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-2/4 h-72 top-0" />
      <div className="flex flex-col p-6 justify-center w-2/4 h-8/12 bg-secondaryLight dark:bg-secondaryDark -ml-8 z-10 shadow-lg">
        <CreatedAtBadge postCreatedAt={post.createdAt} />

        <Link href={`/post/${post.slug}`}>
          <p className="text-secondaryDark dark:text-secondaryLight cursor-pointer mb-4 font-semibold lg:text-xl underline decoration-transparent hover:decoration-[#5865f2]">
            {post.title}
          </p>
        </Link>
        <p className="flex mb-2">
          <FaRegComments className="text-xl mr-2" />
          {post.comments.length}
        </p>
        <ExcerptWithOverflow>{post.excerpt}</ExcerptWithOverflow>

        <Link href={`/post/${post.slug}`}>
          <span className="cursor-pointer flex items-center max-w-max mt-6">
            <GiRead className="text-colorItems mr-3 text-3xl" />
            <span className="text-primaryDark dark:text-primaryLight border-b border-transparent hover:border-colorItems text-xs">
              Read more...
            </span>
          </span>
        </Link>

        <p className="font-medium mt-6 absolute bottom-0 left-0">
          {post.categories.map((category) => (
            <CategoryBadge key={category.name} category={category} />
          ))}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
