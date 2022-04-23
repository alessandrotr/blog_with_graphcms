import React from "react";
import Link from "next/link";
import CategoryBadge from "./ui/CategoryBadge";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import { GiRead } from "react-icons/gi";
import ImageWithFilter from "./ui/ImageWithFilter";
import ReadMoreButton from "./ui/ReadMoreButton";

const PrincipalPostCard = ({ post }) => {
  return (
    <div className="relative h-96 flex items-end">
      <ImageWithFilter post={post} big />
      <CommentsCount post={post} customClass="absolute left-2 top-12" />
      <CreatedAtBadge
        postCreatedAt={post.createdAt}
        customClass="absolute left-2 top-2"
        showIcon
      />
      <p className="text-secondaryDark font-medium absolute left-1 bottom-1">
        {post.categories.map((category) => (
          <CategoryBadge key={category.name} category={category} />
        ))}
      </p>
      <div className="flex flex-col py-12 px-10 justify-center w-6/12 z-10 shadow-lg">
        <Link href={`/post/${post.slug}`}>
          <p className=" leading-relaxed text-secondaryDark dark:text-secondaryLight cursor-pointer mb-4 font-semibold text-2xl lg:text-4xl underline decoration-transparent hover:decoration-[#5865f2]">
            {post.title}
          </p>
        </Link>
        <span className="pr-24">
          <ExcerptWithOverflow>{post.excerpt}</ExcerptWithOverflow>
        </span>
        <ReadMoreButton post={post} customClass="mt-8" />
      </div>
    </div>
  );
};

export default PrincipalPostCard;
