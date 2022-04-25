import React from "react";
import { useRouter } from "next/router";

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";
import { getPosts, getPostDetails } from "../../services";
import { AdjacentPosts } from "../../sections";

import store from "../../appStore";
import { useSnapshot } from "valtio";

import VoteButton from "../../components/ui/VoteButton";

const PostDetails = ({ post }) => {
  const snap = useSnapshot(store);

  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <div
        style={{ maxWidth: "1100px" }}
        className="container mx-auto px-4 md:px-0 mb-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            {/* <Author author={post.author} /> */}
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <div
              className={`relative lg:sticky transition-all duration-500 ${
                snap.headerVisible ? "lg:top-24" : "lg:top-8"
              }`}
            >
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <VoteButton post={post} />
              {/* <Categories /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
