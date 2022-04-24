import React, { useState, useEffect } from "react";
import Link from "next/link";
import CategoryMenu from "./ui/CategoryMenu";

import { getCategories } from "../services";

import ThemeToggle from "./ThemeToggle/ThemeToggle";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div
      style={{ maxWidth: "1100px" }}
      className="sticky top-0 w-full container mx-auto px-4 md:px-0 mb-8 z-20 bg-primaryLightOpacity dark:bg-primaryDarkOpacity"
    >
      <div className="w-full flex align-center items-center justify-between py-4 px-2">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-2xl text-primaryDark dark:text-primaryLight">
              The Blog
            </span>
          </Link>
        </div>
        <div className="flex align-center items-center">
          <CategoryMenu categories={categories} />
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
