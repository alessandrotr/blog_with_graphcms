import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="mb-8">
      <h3 className="text-xl mb-8 font-semibold">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.title}>
          <div
            key={post.title}
            className="flex items-center w-full mb-4 bg-secondaryLight hover:bg-primaryLight dark:bg-secondaryDark dark:hover:bg-primaryDark p-4 py-5 cursor-pointer"
          >
            <div className="w-16 flex-none">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                height="70px"
                width="60px"
                className="align-middle"
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-secondaryDark dark:text-secondaryLight text-xs ">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              {post.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
