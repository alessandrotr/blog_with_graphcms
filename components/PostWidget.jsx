import React, { useState, useEffect } from "react";
import RecentOrRelatedPost from "./ui/RecentOrRelatedPost";
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
        <RecentOrRelatedPost key={post.title} post={post} />
      ))}
    </div>
  );
};

export default PostWidget;
