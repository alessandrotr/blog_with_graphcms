import React from "react";

const ImageWithFilter = (props) => {
  return props.big ? (
    <div
      className="bg-center bg-no-repeat inline-block w-2/4 h-96 bg-cover"
      style={{ backgroundImage: `url('${props.post.featuredImage.url}')` }}
    >
      {/* <div className="bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-96 top-0" /> */}
    </div>
  ) : props.medium ? (
    <div
      className=" bg-center bg-no-repeat inline-block w-2/4 h-72 bg-cover"
      style={{ backgroundImage: `url('${props.post.featuredImage.url}')` }}
    >
      {/* <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-2/4 h-72 top-0" /> */}
    </div>
  ) : props.small ? (
    <div
      className="bg-center bg-no-repeat bg-cover inline-block w-4/12 h-24"
      style={{
        backgroundImage: `url('${props.post.featuredImage.url}')`,
      }}
    >
      {/* <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black h-24" /> */}
    </div>
  ) : props.featuredPost ? (
    <div
      className="bg-center bg-no-repeat bg-cover w-full h-40"
      style={{ backgroundImage: `url('${props.post.featuredImage.url}')` }}
    >
      {/* <div className="absolute bg-center bg-gradient-to-b opacity-30 from-gray-400 via-gray-700 to-black w-full h-40" /> */}
    </div>
  ) : null;
};

export default ImageWithFilter;
