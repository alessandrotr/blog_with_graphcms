import React from "react";
import Link from "next/link";
import { MdCardTravel } from "react-icons/md";
import { FaReact, FaDev } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { HiLibrary } from "react-icons/hi";

function CategoryBadge(props) {
  return (
    <Link href={`/category/${props.category.slug}`}>
      <span
        className={`cursor-pointer font-semibold text-xs p-2 flex items-center text-primaryLight bg-primaryDarkOpacity`}
        style={{ color: props.category.color.hex }}
      >
        {props.category.slug === "travel" ? (
          <MdCardTravel
            style={{ color: props.category.color.hex }}
            className="h-5 w-5 inline mr-2 text-colorItems"
          />
        ) : props.category.slug === "react" ? (
          <FaReact
            style={{ color: props.category.color.hex }}
            className="h-5 w-5 inline mr-2 text-colorItems"
          />
        ) : props.category.slug === "webdev" ? (
          <FaDev
            style={{ color: props.category.color.hex }}
            className="h-5 w-5 inline mr-2 text-colorItems"
          />
        ) : props.category.slug === "sport" ? (
          <FcSportsMode
            style={{ color: props.category.color.hex }}
            className="h-5 w-5 inline mr-2 text-colorItems"
          />
        ) : props.category.slug === "politics" ? (
          <HiLibrary
            style={{ color: props.category.color.hex }}
            className="h-5 w-5 inline mr-2 text-colorItems"
          />
        ) : null}

        {!props.onlyIcon && props.category.name}
      </span>
    </Link>
  );
}

export default CategoryBadge;
