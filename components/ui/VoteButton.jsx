import React, { useState, useEffect } from "react";

import { submitVote, publishVote, getVotes } from "../../services";
import { GiGlassHeart } from "react-icons/gi";

const VoteButton = ({ post }) => {
  const [votes, setVotes] = useState([]);
  const [clicked, setClicked] = useState(false);
  let categoryColor = post.categories.map((color) => color.color.hex);

  useEffect(() => {
    setVotes(post.votes.length);
  }, [post.votes.length]);

  const handler = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  return (
    <div className="mt-10 h-24 flex justify-center items-center z-20">
      <button
        disabled={clicked}
        onClick={() => {
          submitVote(post);
          publishVote();
          setVotes((prevState) => prevState + 1);
          handler();
        }}
        className={`transition-all duration-500 ${
          clicked ? "animate-roll" : ""
        }`}
      >
        <GiGlassHeart
          style={{ color: categoryColor }}
          className={` h-12 w-12 inline `}
        />
      </button>
      <span className="absolute -mr-20">{votes}</span>
    </div>
  );
};

export default VoteButton;
