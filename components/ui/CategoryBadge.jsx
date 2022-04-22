import React from "react";
import Link from "next/link";

function CategoryBadge({ category }) {
  return (
    <Link href={`/category/${category.slug}`}>
      <span
        className="m-2 px-3 py-2 text-xs cursor-pointer transition duration-500 transform hover:-translate-y-1 inline-block text-secondaryDark font-medium"
        style={{ backgroundColor: category.color.hex }}
      >
        {category.name}
      </span>
    </Link>
  );
}

export default CategoryBadge;
