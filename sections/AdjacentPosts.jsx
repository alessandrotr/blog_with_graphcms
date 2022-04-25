import React, { useState, useEffect } from "react";

import { AdjacentPostCard } from "../components";
import { getAdjacentPosts } from "../services";

const AdjacentPosts = ({ createdAt, slug }) => {
  const [adjacentPost, setAdjacentPost] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-5 mb-8">
      {dataLoaded && (
        <>
          {adjacentPost.previous && (
            <>
              <h3 className="font-semibold mb-4">Previous Post</h3>
              <div
                className={`${
                  adjacentPost.next
                    ? "col-span-1 lg:col-span-4"
                    : "col-span-1 lg:col-span-8"
                } adjacent-post rounded-lg relative h-28`}
              >
                <AdjacentPostCard
                  post={adjacentPost.previous}
                  position="LEFT"
                />
              </div>
            </>
          )}
          {adjacentPost.next && (
            <>
              <h3 className="font-semibold mt-4 mb-4">Next Post</h3>
              <div
                className={`${
                  adjacentPost.previous
                    ? "col-span-1 lg:col-span-4"
                    : "col-span-1 lg:col-span-8"
                } adjacent-post rounded-lg relative h-28`}
              >
                <AdjacentPostCard
                  post={adjacentPost.next}
                  position="RIGHT"
                  right
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AdjacentPosts;
