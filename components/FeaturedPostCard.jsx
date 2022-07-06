import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CategoryBadge from "./ui/CategoryBadge";
import ExcerptWithOverflow from "./ui/ExcerptWithOverflow";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import ImageWithFilter from "./ui/ImageWithFilter";
import { useSpring, animated, config, easings } from "react-spring";

const FeaturedPostCard = ({ post }) => {
  let categoryColor = post.categories.map((color) => color.color.hex);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const [style, animate] = useSpring(
    () => ({
      config: { duration: 150, tension: 10 },
      height: "0px",
    }),
    []
  );

  useEffect(() => {
    animate({
      height: (hover ? ref.current.offsetHeight : 0) + "px",
    });
  }, [animate, ref, hover]);

  return (
    <div
      style={{
        backgroundImage: `url("${post.featuredImage.url}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative h-96 flex items-end"
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      ref={ref}
    >
      <animated.div
        style={style}
        className="flex flex-col justify-center absolute bg-primaryLightOpacity dark:bg-primaryDarkOpacity text-secondaryDark dark:text-secondaryLight p-6 py-20 transition-all"
      >
        <div className="flex my-1 items-center">
          {post.categories.map((category) => (
            <CategoryBadge
              key={category.name}
              category={category}
              customClass="text-xs mr-3"
            />
          ))}
          |
          <CreatedAtBadge
            postCreatedAt={post.createdAt}
            categoryColor={categoryColor}
            customClass="mx-3 font-normal text-xs"
          />
          |
          <CommentsCount
            post={post}
            categoryColor={categoryColor}
            customClass="mx-3 text-xs"
          />
        </div>

        <h2
          className={`leading-tight cursor-pointer my-2 font-semibold underline decoration-4 ${
            hover ? "decoration-[#5865f2]" : " decoration-transparent"
          } text-2xl`}
        >
          {post.title}
        </h2>
        <ExcerptWithOverflow
          featuredPostCard={true}
          lineClamp="3"
          customClass="text-md"
        >
          {post.excerpt}
        </ExcerptWithOverflow>
      </animated.div>
      <Link href={`/post/${post.slug}`}>
        <span className="cursor-pointer absolute w-full h-full top-0" />
      </Link>
    </div>
  );
};
export default FeaturedPostCard;
