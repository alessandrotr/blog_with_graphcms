import React from "react";
import { FaRegComments } from "react-icons/fa";

const CommentsCount = (props) => {
  return (
    <p
      style={{ lineHeight: "20px" }}
      className={`max-w-max flex justify-center items-center bg-primaryLightOpacity dark:bg-primaryDarkOpacity text-primaryDark dark:text-primaryLight p-2 ${props.customClass}`}
    >
      <FaRegComments
        className={`text-base mr-2 text-colorItems ${props.iconClass}`}
      />
      {props.post.comments.length}
    </p>
  );
};

export default CommentsCount;
