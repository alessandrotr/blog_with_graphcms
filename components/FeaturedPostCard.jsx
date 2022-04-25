import React from "react";
import Link from "next/link";
import CategoryBadge from "./ui/CategoryBadge";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import ImageWithFilter from "./ui/ImageWithFilter";

const FeaturedPostCard = ({ post }) => {
  let categoryColor = post.categories.map((color) => color.color.hex);

  return (
    <div className="relative h-72">
      <ImageWithFilter post={post} featuredPost />
      <div className="flex justify-end absolute left-0 bottom-0 w-full">
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
          <CategoryBadge key={category.name} category={category} />
        ))}
      </div>
      <div className="flex flex-col rounded-lg p-4 pt-0 justify-center absolute w-full h-full px-20">
        <p className="text-secondaryLight mb-2 text-shadow font-semibold text-2xl leading-normal text-center">
          {post.title}
        </p>
        <ExcerptWithOverflow textCentered featuredPostCard={true}>
          {post.excerpt}
        </ExcerptWithOverflow>
      </div>
      <Link href={`/post/${post.slug}`}>
        <span className="cursor-pointer absolute w-full h-full" />
      </Link>
    </div>
  );
};
export default FeaturedPostCard;
