import React from "react";
import Link from "next/link";
import { GiRead } from "react-icons/gi";

const ReadMoreButton = (props) => {
  return (
    <div className={` ${props.customClass}`}>
      <Link href={`/post/${props.post.slug}`}>
        <span className="font-semibold text-xs cursor-pointer flex items-center bg-secondaryDark max-w-max p-2 px-3">
          <GiRead
            style={{ color: props.categoryColor }}
            className=" mr-3 text-xl"
          />
          <span className="text-primaryLight border-b border-transparent hover:border-colorItems">
            Read more
          </span>
        </span>
      </Link>
    </div>
  );
};

export default ReadMoreButton;
