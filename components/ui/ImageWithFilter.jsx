import React from "react";

const ImageWithFilter = (props) => {
  return props.big ? (
    <div
      className="rounded-lg bg-center bg-no-repeat shadow-md inline-block w-2/4 h-96 bg-cover"
      style={{ backgroundImage: `url('${props.post.featuredImage.url}')` }}
    >
      <div className="rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-96 top-0" />
    </div>
  ) : props.medium ? (
    <div
      className=" rounded-lg bg-center bg-no-repeat shadow-md inline-block w-2/4 h-72 bg-cover"
      style={{ backgroundImage: `url('${props.post.featuredImage.url}')` }}
    >
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-2/4 h-72 top-0" />
    </div>
  ) : props.small ? (
    <div
      className="bg-center bg-no-repeat bg-cover inline-block w-4/12 h-24"
      style={{
        backgroundImage: `url('${props.post.featuredImage.url}')`,
      }}
    >
      <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black h-24" />
    </div>
  ) : props.featuredPost ? (
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
      style={{ backgroundImage: `url('${props.post.featuredImage.url}')` }}
    >
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-90 from-gray-400 via-gray-700 to-black w-full h-72" />
    </div>
  ) : null;
};

export default ImageWithFilter;
