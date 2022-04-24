import React, { useState } from "react";
import Link from "next/link";
import { MdCategory } from "react-icons/md";
import { useTransition, animated, config } from "react-spring";

const CategoryMenu = ({ categories }) => {
  const [show, setShow] = useState(false);

  const handler = () => {
    setShow(true);
  };

  //   const MenuTransition = useTransition(show, {
  //     from: { opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //     // config: config.molasses,
  //   });

  return (
    <>
      <div
        className="h-full flex items-center justify-center"
        onPointerOver={() => setShow(true)}
      >
        <MdCategory
          className={`text-2xl cursor-pointer z-20 ${
            show ? "text-colorItems" : "text-primaryDark dark:text-primaryLight"
          }`}
        />
        <div
          onPointerUp={() => setShow(false)}
          className={`w-full h-full fixed top-0 left-0 z-10 ${
            show ? "block" : "hidden"
          }`}
        />
      </div>
      {/* {MenuTransition(
        (style, item) =>
          item && ( */}
      {show && (
        <animated.div
          style={{ maxWidth: "1100px" }}
          //   onPointerOver={() => setShow(true)}
          className="absolute bg-secondaryLight dark:bg-secondaryDark p-6 top-16 w-full left-0 shadow-lg z-20"
        >
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              passHref
            >
              <span className="text-primaryDark dark:text-primaryLight ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </animated.div>
      )}
      {/* )
      )} */}
    </>
  );
};

export default CategoryMenu;
