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
    <div className="relative h-80">
      <ImageWithFilter featuredPost post={post} />

      <div className="flex flex-col rounded-lg pt-4 pt-0 justify-center absolute">
        {post.categories.map((category) => (
          <CategoryBadge
            key={category.name}
            category={category}
            customClass=" -mt-6 mb-4 bg-colorItems2 text-primaryDark p-1 max-w-max uppercase font-medium"
          />
        ))}
        <p className="text-secondaryLight mb-2 font-medium text-xl leading-normal">
          {post.title}
        </p>
        <ExcerptWithOverflow
          featuredPostCard={true}
          lineClamp="2"
          customClass="text-xs text-secondaryLight"
        >
          {post.excerpt}
        </ExcerptWithOverflow>
        <div className="flex mt-3 items-center text-secondaryLight">
          <CreatedAtBadge
            postCreatedAt={post.createdAt}
            categoryColor={categoryColor}
            customClass="mr-2 text-secondaryLight font-normal text-xs"
          />
          |
          <CommentsCount
            post={post}
            categoryColor={categoryColor}
            customClass="ml-2 text-secondaryLight text-xs"
          />
        </div>
      </div>
      <Link href={`/post/${post.slug}`}>
        <span className="cursor-pointer absolute w-full h-full top-0" />
      </Link>
    </div>
  );
};
export default FeaturedPostCard;
