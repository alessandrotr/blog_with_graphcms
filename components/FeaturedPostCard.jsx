import React from "react";
import Link from "next/link";
import CategoryBadge from "./ui/CategoryBadge";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import ImageWithFilter from "./ui/ImageWithFilter";

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72">
    <ImageWithFilter post={post} featuredPost />
    <div className="flex flex-col rounded-lg p-4 justify-center absolute w-full h-full px-6">
      <CreatedAtBadge
        postCreatedAt={post.createdAt}
        customClass="absolute left-2 top-2"
        showIcon
      />
      <p className="text-secondaryLight mb-2 text-shadow font-semibold text-2xl">
        {post.title}
      </p>
      <CommentsCount post={post} customClass="absolute top-2 right-2" />
      <ExcerptWithOverflow featuredPostCard={true}>
        {post.excerpt}
      </ExcerptWithOverflow>
      <div className="flex justify-center w-full absolute left-0 bottom-1">
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
