import React from "react";
import { FaRegComments } from "react-icons/fa";

const CommentsCount = (props) => {
  return (
    <p
      style={{ lineHeight: "20px" }}
      className={`max-w-max flex justify-center items-center ${props.customClass}`}
    >
      <FaRegComments className={`h-5 w-5 inline mr-2 ${props.iconClass}`} />
      {props.post.comments.length}
    </p>
  );
};

export default CommentsCount;
