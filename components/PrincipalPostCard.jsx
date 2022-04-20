import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PrincipalPostCard = ({ post }) => (
  <div className="relative h-96">
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-96"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-96" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className="text-white mb-4 text-shadow font-semibold text-6xl text-center">
        {post.title}
      </p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">
          {post.author.name}
        </p>
      </div>
      <p className="text-white text-shadow ml-2 font-medium absolute top-0 right-0">
        {post.categories.map((category) => (
          <span key={category.name} className="mx-2 bg-colorItems px-2 text-xs">
            {category.name}
          </span>
        ))}
      </p>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default PrincipalPostCard;
