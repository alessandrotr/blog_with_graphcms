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
  return (
    <div className="relative h-72 flex mb-12 items-end">
      <ImageWithFilter medium post={post} />
      <CreatedAtBadge
        postCreatedAt={post.createdAt}
        customClass="absolute left-2 top-2"
        showIcon
      />
      <CommentsCount post={post} customClass="absolute left-2 top-12" />
      <p className="font-medium mt-6 absolute bottom-0 left-0">
        {post.categories.map((category) => (
          <CategoryBadge key={category.name} category={category} />
        ))}
      </p>
      <div className="flex flex-col w-full w-2/4">
        <div className="flex flex-col py-10 px-8 justify-center w-full h-8/12 z-10 shadow-lg">
          <Link href={`/post/${post.slug}`}>
            <p className="leading-normal text-secondaryDark dark:text-secondaryLight cursor-pointer mb-4 font-semibold lg:text-xl underline decoration-transparent hover:decoration-[#5865f2]">
              {post.title}
            </p>
          </Link>
          <ExcerptWithOverflow>{post.excerpt}</ExcerptWithOverflow>
          <ReadMoreButton post={post} customClass="mt-4 text-sm" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
