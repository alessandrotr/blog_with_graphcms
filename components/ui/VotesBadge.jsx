import React from "react";
import { GiGlassHeart } from "react-icons/gi";

const VotesBadge = (props) => {
  return (
    <p
      className={`font-semibold text-xs p-2 flex items-center ${props.customClass}`}
    >
      <GiGlassHeart className="h-5 w-5 inline mr-2" />
      {props.votes}
    </p>
  );
};

export default VotesBadge;
