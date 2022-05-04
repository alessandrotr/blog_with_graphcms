import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";
import store from "../appStore";
import { useSnapshot } from "valtio";

export default function Home({ posts }) {
  const snap = useSnapshot(store);

  return (
    <div style={{ maxWidth: "1100px" }} className="container mx-auto mb-8">
      <Head>
        <title>Blog</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={post.title} post={post.node} showExcerpt />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div
            className={`relative lg:sticky transition-all duration-500 ${
              snap.headerVisible ? "lg:top-24" : "lg:top-8"
            }`}
          >
            <PostWidget />
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
