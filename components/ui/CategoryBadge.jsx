import React from "react";
import Link from "next/link";
import { MdCardTravel } from "react-icons/md";
import { FaReact, FaDev } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { HiLibrary } from "react-icons/hi";

function CategoryBadge(props) {
  return (
    <Link href={`/category/${props.category.slug}`}>
      <p
        // style={{ backgroundColor: props.category.color.hex }}
        className={`cursor-pointer flex items-center p-1 bg-colorItems font-semibold ${props.customClass}`}
      >
        {/* {props.category.slug === "travel" ? (
          <MdCardTravel className="h-5 w-5 inline mr-2" />
        ) : props.category.slug === "react" ? (
          <FaReact className="h-5 w-5 inline mr-2" />
        ) : props.category.slug === "webdev" ? (
          <FaDev className="h-5 w-5 inline mr-2" />
        ) : props.category.slug === "sport" ? (
          <FcSportsMode className="h-5 w-5 inline mr-2" />
        ) : props.category.slug === "politics" ? (
          <HiLibrary className="h-5 w-5 inline mr-2" />
        ) : null} */}

        {!props.onlyIcon && props.category.name}
      </p>
    </Link>
  );
}

export default CategoryBadge;
