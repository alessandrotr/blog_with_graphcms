import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import CategoryBadge from "./ui/CategoryBadge";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CreatedAtBadge from "./ui/CreatedAtBadge";

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72">
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-70 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 justify-center absolute w-full h-full px-6">
      <CreatedAtBadge postCreatedAt={post.createdAt} />
      <p className="text-secondaryLight mb-4 text-shadow font-semibold text-2xl">
        {post.title}
      </p>
      <ExcerptWithOverflow featuredPostCard={true}>
        {post.excerpt}
      </ExcerptWithOverflow>
      <div className="flex justify-end w-10/12 absolute bottom-4 right-5">
        {post.categories.map((category) => (
          <CategoryBadge key={category.name} category={category} />
        ))}
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
