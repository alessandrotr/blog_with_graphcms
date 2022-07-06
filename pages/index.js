import React, { useState, useEffect } from "react";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts, getCategories } from "../services";
import { FeaturedPosts } from "../sections";
import store from "../appStore";
import { useSnapshot } from "valtio";
import Carousel from "react-multi-carousel";
import { FeaturedPostCard } from "../components";

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

export default function Home({ posts }) {
  const snap = useSnapshot(store);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  console.log(categories);
  console.log(posts[0].node.categories[0].name);

  const alternatingColor = [
    `linear-gradient(to top, rgba(68, 68, 68, 0.75), rgba(88, 101, 242, 0.85)`,
    `linear-gradient(to bottom, rgba(68, 68, 68, 0.75), rgba(88, 101, 242, 0.85)`,
  ];

  return (
    <div style={{ maxWidth: "1100px" }} className="container mx-auto">
      <Head>
        <title>Blog</title>
      </Head>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(68, 68, 68, 0.75), rgba(88, 101, 242, 0.85)",
        }}
        className="px-6 py-8"
      >
        <h2 className="text-2xl opacity-80 pl-2">We want you to see</h2>
      </div>
      <FeaturedPosts />
      {categories.map((category, index) => (
        <>
          {console.log(category)}
          <div
            key={category.slug}
            style={{
              backgroundImage:
                alternatingColor[index % alternatingColor.length],
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="px-6 py-3"
          >
            <h2 className="text-2xl opacity-80 mb-6 pl-2">{category.name}</h2>
            <Carousel
              infinite
              draggable={false}
              responsive={responsive}
              itemClass="px-2"
              focusOnSelect={true}
              autoPlay={false}
            >
              {posts.map(
                (post, index) =>
                  post.node.categories[0].name === category.name && (
                    <FeaturedPostCard key={post.title} post={post.node} />
                  )
              )}
            </Carousel>
          </div>
        </>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
