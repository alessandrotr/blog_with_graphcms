import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FeaturedPostCard, PrincipalPostCard } from "../components";
import { getFeaturedPosts, getPrincipalPost } from "../services";

import { useSpring, animated, config, easings } from "react-spring";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [principalPost, setPrincipalPost] = useState([]);
  const [backgroundPrincipalPost, setBackgroundPrincipalPost] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  const [hover, setHover] = useState(false);

  const [style, animate] = useSpring(
    () => ({
      config: config.molasses,
      backgroundImage: `linear-gradient(to bottom, rgba(68, 68, 68, 0.45), rgba(88, 101, 242, 0.85)),
    url("${backgroundPrincipalPost}")`,
    }),
    []
  );

  useEffect(() => {
    animate({
      backgroundImage: hover
        ? `linear-gradient(to top, rgba(68, 68, 68, 0.95), rgba(88, 101, 242, 0.95)),
    url("${backgroundPrincipalPost}")`
        : `linear-gradient(to top, rgba(68, 68, 68, 0.45), rgba(88, 101, 242, 0.85)),
    url("${backgroundPrincipalPost}")`,
    });
  }, [animate, hover, backgroundPrincipalPost]);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  useEffect(() => {
    getPrincipalPost().then((result) => {
      setPrincipalPost(result);
      setDataLoaded(true);
    });
  }, []);

  useEffect(() => {
    const image = principalPost.map((pp) => pp.featuredImage.url);
    setBackgroundPrincipalPost(image);
  }, [principalPost]);

  const customLeftArrow = (
    <div
      style={{
        width: "35px",
        height: "35px",
      }}
      className="absolute arrow-btn left-0 top-0 text-center cursor-pointer flex justify-center items-center bg-colorItems"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-secondaryLight"
        style={{
          width: "25px",
          height: "25px",
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div
      style={{
        width: "35px",
        height: "35px",
      }}
      className="absolute arrow-btn right-0 top-0 text-center cursor-pointer flex justify-center items-center bg-colorItems"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-secondaryLight"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        style={{
          width: "25px",
          height: "25px",
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );
  return (
    <>
      <animated.div
        style={{
          ...style,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingBottom: 0,
        }}
        className="p-8"
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <h2 className="text-2xl opacity-80 pl-2 text-primaryLight mb-6">
          We want you to see
        </h2>
        {dataLoaded &&
          principalPost.map((post, index) => (
            <PrincipalPostCard key={index} post={post} hover={hover} />
          ))}
      </animated.div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(68, 68, 68, 0.85), rgba(88, 101, 242, 0.75)),
          url("${backgroundPrincipalPost}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="px-6 py-8"
      >
        <h2 className="text-2xl opacity-80 pl-2 text-primaryLight mb-8">
          Featured Posts
        </h2>

        <Carousel
          infinite
          draggable={false}
          customLeftArrow={customLeftArrow}
          customRightArrow={customRightArrow}
          responsive={responsive}
          itemClass="px-2"
          focusOnSelect={true}
          autoPlay={false}
        >
          {dataLoaded &&
            featuredPosts.map((post, index) => (
              <FeaturedPostCard key={index} post={post} />
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default FeaturedPosts;
