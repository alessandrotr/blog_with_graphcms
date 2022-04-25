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
    <div className="">
      <h3 className="font-semibold mb-5">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      <div
        className="scrollSection"
        style={{ maxHeight: "430px", overflow: "auto" }}
      >
        {relatedPosts.map((post) => (
          <RecentOrRelatedPost key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
