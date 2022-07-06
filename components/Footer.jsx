import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

function Footer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div
      style={{ maxWidth: "1100px" }}
      className="container mx-auto px-4 md:px-0 mt-20 md:mt-0"
    >
      <div className="w-full inline-block py-8 px-2">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-2xl text-primaryDark dark:text-primaryLight">
              The Blog
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
