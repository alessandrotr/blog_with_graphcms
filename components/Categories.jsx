import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { getCategories } from "../services";

import CategoryBadge from "./ui/CategoryBadge";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="mb-8 pb-12">
      <h3 className="text-xl mb-6 font-semibold">Categories</h3>

      {categories.map((category) => (
        <CategoryBadge key={category.name} category={category} />
      ))}
    </div>
  );
};

export default Categories;
