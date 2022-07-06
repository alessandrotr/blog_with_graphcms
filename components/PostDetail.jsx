import React, { useRef, useState, useEffect } from "react";
import CategoryBadge from "./ui/CategoryBadge";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import ReadingProgress from "./ReadingProgress/readingProgress";
import VotesBadge from "./ui/VotesBadge";
import store from "../appStore";

import { useSnapshot } from "valtio";

const PostDetail = ({ post }) => {
  const target = useRef();
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  let categoryColor = post.categories.map((color) => color.color.hex);
  const snap = useSnapshot(store);

  const [votes, setVotes] = useState([]);

  useEffect(() => {
    setVotes(post.votes.length);
  }, [post.votes.length]);

  return (
    <>
      <div ref={target} className="lg:p-2 lg:pt-0 pb-12 mb-8 rounded-lg ">
        <ReadingProgress target={target} />
        <div
          className={`flex mb-6 justify-between items-center sticky py-2 bg-primaryLight dark:bg-primaryDark ${
            snap.headerVisible ? "top-16 " : "top-0 "
          }`}
        >
          <div className="flex items-center">
            {post.categories.map((category) => (
              <CategoryBadge
                key={category.name}
                category={category}
                color={category.color}
                customClass="text-md mr-2"
              />
            ))}
            <p className="whitespace-nowrap overflow-hidden text-ellipsis w-62 ml-2">
              {post.title}
            </p>
          </div>
          <div className="flex items-center">
            <CommentsCount
              post={post}
              categoryColor={categoryColor}
              customClass="mx-4 text-md"
            />
            <VotesBadge categoryColor={categoryColor} votes={votes} />
            <CreatedAtBadge
              postCreatedAt={post.createdAt}
              categoryColor={categoryColor}
              customClass="ml-4 font-normal text-md"
            />
          </div>
        </div>
        <div
          className="bg-cover h-full"
          style={{ backgroundImage: `url("${post.featuredImage.url}")` }}
        >
          <div
            className="p-8 h-full flex items-end"
            style={{ height: "50vh", backgroundColor: "rgba(0,0,0,0.6" }}
          >
            <h1 className="text-4xl md:text-6xl font-semibold leading-normal w-3/4 text-primaryLight">
              {post.title}
            </h1>
            {/* <p className="mb-8 text-lg font-normal leading-normal">
              {post.excerpt}
            </p> */}
          </div>
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full"></div>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
