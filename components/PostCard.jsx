import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import Link from "next/link";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CategoryBadge from "./ui/CategoryBadge";
import CommentsCount from "./ui/CommentsCount";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import ImageWithFilter from "./ui/ImageWithFilter";
import ReadMoreButton from "./ui/ReadMoreButton";
import { useSpring, animated, config, easings } from "react-spring";

const PostCard = ({ post }) => {
  let categoryColor = post.categories.map((color) => color.color.hex);
  const [hover, setHover] = useState(false);

  const [style, animate] = useSpring(
    () => ({
      config: { duration: 150, tension: 10 },
      height: "0px",
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
      <div
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        className="relative h-72 flex mb-12 items-start cursor-pointer"
      >
        <ImageWithFilter medium post={post} />
        <div className="flex flex-col px-6 justify-start w-6/12 z-10 h-full">
          <animated.div className="flex mb-3 items-center ">
            {post.categories.map((category) => (
              <CategoryBadge
                key={category.name}
                category={category}
                customClass=" text-xs mr-4"
              />
            ))}
            |
            <CreatedAtBadge
              postCreatedAt={post.createdAt}
              categoryColor={categoryColor}
              customClass="mx-4  font-normal text-xs"
            />
            |
            <CommentsCount
              post={post}
              categoryColor={categoryColor}
              customClass="mx-4  text-xs"
            />
          </animated.div>
          <h2
            className={`leading-tight cursor-pointer mb-4 font-semibold underline decoration-4 ${
              hover ? "decoration-[#5865f2]" : " decoration-transparent"
            } text-3xl`}
          >
            {post.title}
          </h2>
          <animated.span className="pr-12">
            <ExcerptWithOverflow lineClamp="3">
              {post.excerpt}
            </ExcerptWithOverflow>
          </animated.span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
