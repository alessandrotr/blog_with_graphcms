import React from "react";

const ExcerptWithOverflow = (props, { children }) => {
  return (
    <p
      className={`inline align-middle font-medium excerptOverflow mr-8 ${
        props.featuredPostCard
          ? "text-primaryLight dark:text-primaryLight text-sm"
          : "text-primaryDark dark:text-primaryLight text-sm"
      }`}
    >
      {props.children}
    </p>
  );
};

export default ExcerptWithOverflow;
