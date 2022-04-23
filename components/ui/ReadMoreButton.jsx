import React from "react";
import Link from "next/link";
import { GiRead } from "react-icons/gi";

const ReadMoreButton = (props) => {
  return (
    <div className={` ${props.customClass}`}>
      <Link href={`/post/${props.post.slug}`}>
        <span className="cursor-pointer flex items-center">
          <GiRead className="text-colorItems mr-3 text-3xl" />
          <span className="text-primaryDark dark:text-primaryLight border-b border-transparent hover:border-colorItems">
            Read more...
          </span>
        </span>
      </Link>
    </div>
  );
};

export default ReadMoreButton;
