import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdCategory } from "react-icons/md";
import { useTransition, animated, config } from "react-spring";
import CategoryBadge from "./CategoryBadge";
import { useSnapshot } from "valtio";
import store from "../../appStore";

const CategoryMenu = ({ categories }) => {
  const [show, setShow] = useState(false);
  const snap = useSnapshot(store);
  useEffect(() => {
    if (!snap.headerVisible) {
      setShow(false);
    }
  }, [snap.headerVisible]);
  return (
    <>
      {/* <div
        onClick={() => setShow(false)}
        className={`w-full h-full fixed top-0 left-0 ${
          show ? "block" : "hidden"
        }`}
      /> */}
      <div
        className={`cursor-pointer h-full flex items-center justify-center ${
          show ? "" : ""
        }`}
        onClick={() => setShow(!show)}
      >
        <MdCategory
          className={`text-2xl z-20 transition-all duration-500 ${
            show
              ? "text-colorItems scale-[1.7]"
              : "text-primaryDark dark:text-primaryLight"
          }`}
        />
      </div>

      <div
        style={{
          maxWidth: "1100px",
          // transform: `${show ? "translateY(0)" : "translateY(-200%)"}`,
          opacity: `${show ? 1 : 0}`,
          pointerEvents: `${show ? "all" : "none"}`,
          zIndex: 0,
        }}
        className="z-10 transition-all duration-500 absolute bg-primaryLight dark:bg-primaryDark top-[4.45rem] w-full left-0 grid grid-cols-1 lg:grid-cols-4 gap-4 p-6 px-10 shadow-2xl"
      >
        {categories.map((category) => (
          <Link
            href={`/category/${category.slug}`}
            key={category.slug}
            passHref
          >
            <div
              className="bg-center bg-cover w-full h-24 h-full cursor-pointer flex items-end justify-end rounded-md"
              style={{
                backgroundImage: `url("${category.featuredImage.url}")`,
              }}
              onClick={() => setShow(false)}
            >
              <div className="rounded bg-center bg-gradient-to-b opacity-90 hover:opacity-60 transition-all duration-400 from-gray-400 via-gray-600 to-black h-full w-full flex items-end justify-end"></div>
              <div className="absolute">
                <CategoryBadge category={category} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryMenu;
