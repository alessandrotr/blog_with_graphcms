import React, { useEffect } from "react";
import Link from "next/link";
import CategoryBadge from "./ui/CategoryBadge";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import ImageWithFilter from "./ui/ImageWithFilter";
import ReadMoreButton from "./ui/ReadMoreButton";
import { useSpring, animated, config, easings } from "react-spring";

const PrincipalPostCard = ({ post, hover }) => {
  let categoryColor = post.categories.map((color) => color.color.hex);

  const [style, animate] = useSpring(
    () => ({
      config: { duration: 250, tension: 10 },
      opacity: 0,
    }),
    []
  );

  useEffect(() => {
    animate({
      opacity: hover ? 1 : 0,
    });
  }, [animate, hover]);

  return (
    <Link href={`/post/${post.slug}`}>
      <div className="relative h-full flex items-center pt-4 pb-16 px-8 cursor-pointer">
        <ImageWithFilter post={post} big />
        <div className="flex flex-col px-6 justify-center w-6/12 z-10 h-full">
          <animated.div className="flex mb-3 items-center text-secondaryLight">
            {post.categories.map((category) => (
              <CategoryBadge
                key={category.name}
                category={category}
                customClass="text-secondaryLight text-xs mr-4"
              />
            ))}
            |
            <CreatedAtBadge
              postCreatedAt={post.createdAt}
              categoryColor={categoryColor}
              customClass="mx-4 text-secondaryLight font-normal text-xs"
            />
            |
            <CommentsCount
              post={post}
              categoryColor={categoryColor}
              customClass="mx-4 text-secondaryLight text-xs"
            />
          </animated.div>
          <h2
            className={`leading-tight text-secondaryLight cursor-pointer mb-4 font-semibold underline decoration-8 ${
              hover ? "decoration-[#5865f2]" : " decoration-transparent"
            } text-5xl`}
          >
            {post.title}
          </h2>
          <animated.span style={style} className="pr-12">
            <ExcerptWithOverflow customClass="text-secondaryLight">
              {post.excerpt}
            </ExcerptWithOverflow>
          </animated.span>
          {/* <ReadMoreButton
          categoryColor={categoryColor}
          post={post}
          customClass="mt-8 absolute w-full flex justify-end bottom-0 left-0"
        /> */}
        </div>
      </div>
    </Link>
  );
};

export default PrincipalPostCard;
