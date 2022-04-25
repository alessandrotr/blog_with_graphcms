import React from "react";
import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

import store from "../../appStore";
import { useSnapshot } from "valtio";

const CategoryPost = ({ posts }) => {
  const snap = useSnapshot(store);

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div
      style={{ maxWidth: "1100px" }}
      className="container mx-auto px-4 md:px-10 mb-8"
    >
      {/* {posts.map(post => {
      <CategoryHeader post={post.node} />
      })} */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 grid">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div
            className={`relative lg:sticky transition-all duration-500 ${
              snap.headerVisible ? "lg:top-24" : "lg:top-8"
            }`}
          >
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
