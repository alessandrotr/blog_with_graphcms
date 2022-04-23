import { React, useState, useEffect } from "react";
import { useReadingProgress } from "../../hooks/useReadingProgress";

const ReadingBar = (props) => {
  const completion = useReadingProgress();

  return (
    <span
      id="progress-bar"
      style={{
        transform: `translateX(${completion - 122.7}%)`,
      }}
      className={`fixed top-0 w-full transition-transform duration-150 h-1 bg-colorItems z-20`}
    />
  );
};

export default ReadingBar;
