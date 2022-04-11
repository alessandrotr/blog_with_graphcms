import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

import ThemeToggle from "./ThemeToggle/ThemeToggle";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="sticky top-0 w-full container mx-auto px-10 mb-8 z-20 bg-primaryLightOpacity dark:bg-primaryDarkOpacity">
      <div className="w-full inline-block py-4 px-2">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-4xl text-primaryDark dark:text-primaryLight">
              Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              passHref
            >
              <span className="md:float-right mt-2 align-middle text-black dark:text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
