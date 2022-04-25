import React, { useState, useEffect } from "react";
import { FiPercent } from "react-icons/fi";
import { FcReading } from "react-icons/fc";

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }
    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight + 100;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }
    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }
    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });
  return (
    <>
      <div
        className={`fixed h-1 top-0 left-0 bg-colorItems transition-opacity duration-500`}
        style={{
          width: `${readingProgress}%`,
          opacity: readingProgress >= 100 ? 0 : 1,
        }}
      ></div>
      <div
        style={{
          maxWidth: "1100px",
          opacity: readingProgress >= 100 ? 0 : readingProgress <= 26 ? 0 : 1,
        }}
        className="trasition-all duration-500 fixed inset-1/2x flex justify-end bottom-36 w-full"
      >
        <div
          style={{ width: "330px", userSelect: "none" }}
          className="p-4 flex items-center justify-center"
        >
          <FcReading className="text-6xl" />

          <span
            style={{ marginLeft: "6.4rem", userSelect: "none" }}
            className="absolute flex items-center"
          >
            {readingProgress.toFixed()}
            <FiPercent />
          </span>
        </div>
      </div>
    </>
  );
};

export default ReadingProgress;
