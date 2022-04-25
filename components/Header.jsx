import React, { useState, useEffect } from "react";
import Link from "next/link";
import CategoryMenu from "./ui/CategoryMenu";

import { getCategories } from "../services";

import ThemeToggle from "./ThemeToggle/ThemeToggle";

import store from "../appStore";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        // downscroll code
        setScrolling(false);
        store.headerVisible = false;
        setShow(false);
      } else {
        // upscroll code
        setShow(true);
        store.headerVisible = true;
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div
      style={{
        maxWidth: "1100px",
        transform: `${show ? "translateY(0)" : "translateY(-100%)"}`,
        opacity: `${show ? 1 : 0}`,
      }}
      className="z-20 transition-all duration-500 sticky top-0 w-full container mx-auto px-4 md:px-0 mb-8 bg-primaryLight dark:bg-primaryDark shadow-2xl"
    >
      <div className="w-full flex align-center items-center justify-between py-4 px-2">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-2xl text-primaryDark dark:text-primaryLight pl-2">
              The Blog
            </span>
          </Link>
        </div>
        <div className="flex align-center items-center ">
          <CategoryMenu categories={categories} />
          <div className="ml-4 ">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
