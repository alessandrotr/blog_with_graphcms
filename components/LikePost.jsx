import React, { useState, useEffect, useRef } from "react";
import { getCurrentPost } from "../services";
import { submitLike } from "../services";

const LikePost = ({ slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const likeEl = useRef();

  useEffect(() => {
    if (slug) {
      getCurrentPost(slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  const handleUpdateLikeSubmission = () => {
    setError(false);
    const { value: likes } = likeEl.current;

    const likeObj = {
      likes,
      slug,
    };

    submitLike(likeObj).then((res) => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div ref={likeEl} onClick={submitLike(1)}>
      {relatedPosts.map((rp) => rp.likes)} Likes
    </div>
  );
};

export default LikePost;
