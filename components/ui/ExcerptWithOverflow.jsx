import React from "react";

const ExcerptWithOverflow = (props) => {
  return (
    <p
      className={`inline align-middle font-normal leading-relaxed 
    ${props.customClass}
      ${
        props.lineClamp === "3"
          ? "line-clamp-3"
          : props.lineClamp === "2"
          ? "line-clamp-2"
          : props.lineClamp === "1"
          ? "line-clamp-1"
          : ""
      }
      `}
    >
      {props.children}
    </p>
  );
};

export default ExcerptWithOverflow;
