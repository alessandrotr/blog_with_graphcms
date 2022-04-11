import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-secondaryLight dark:bg-secondaryDark rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b-2 border-colorItems pb-4">
        Categories
      </h3>

      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block pb-3 mb-3 ${
              category.slug === router.query.slug ? "text-colorItems" : ""
            } `}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
