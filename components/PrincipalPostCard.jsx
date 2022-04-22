import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import CategoryBadge from "./ui/CategoryBadge";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import { FaRegComments } from "react-icons/fa";
import { GiRead } from "react-icons/gi";

const PrincipalPostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="relative h-96 flex items-center">
      <div
        className=" rounded-lg bg-center bg-no-repeat shadow-md inline-block w-2/4 h-96 bg-cover"
        style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-2/4 h-96 top-0" />
      <div className="flex flex-col p-8 justify-center w-2/4 h-full bg-secondaryLight dark:bg-secondaryDark h-3/4 -ml-8 z-10 shadow-lg">
        <CreatedAtBadge postCreatedAt={post.createdAt} />

        <Link href={`/post/${post.slug}`}>
          <p className="text-secondaryDark dark:text-secondaryLight cursor-pointer mb-4 font-semibold text-2xl lg:text-3xl underline decoration-transparent hover:decoration-[#5865f2]">
            {post.title}
          </p>
        </Link>
        <p className="flex mb-2">
          <FaRegComments className="text-xl mr-2" />
          {post.comments.length}
        </p>
        <ExcerptWithOverflow>{post.excerpt}</ExcerptWithOverflow>

        <div className="flex justify-between items-center mt-8">
          <Link href={`/post/${post.slug}`}>
            <span className="cursor-pointer flex items-center max-w-max">
              <GiRead className="text-colorItems mr-3 text-3xl" />
              <span className="text-primaryDark dark:text-primaryLight border-b border-transparent hover:border-colorItems">
                Read more...
              </span>
            </span>
          </Link>
          <p className="text-secondaryDark font-medium">
            {post.categories.map((category) => (
              <CategoryBadge key={category.name} category={category} />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalPostCard;
