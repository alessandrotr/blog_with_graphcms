import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FeaturedPostCard, PrincipalPostCard } from "../components";
import { getFeaturedPosts, getPrincipalPost } from "../services";

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
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(68, 68, 68, 0.75), rgba(88, 101, 242, 0.85)),
        url("${backgroundPrincipalPost}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "-4.6rem",
        paddingTop: "6rem",
      }}
      className="mb-8 p-6"
    >
      <div className="">
        <div className="mb-6">
          {dataLoaded &&
            principalPost.map((post, index) => (
              <PrincipalPostCard key={index} post={post} />
            ))}
        </div>
        <Carousel
          infinite
          customLeftArrow={customLeftArrow}
          customRightArrow={customRightArrow}
          responsive={responsive}
          itemClass="px-4"
        >
          {dataLoaded &&
            featuredPosts.map((post, index) => (
              <FeaturedPostCard key={index} post={post} />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedPosts;
