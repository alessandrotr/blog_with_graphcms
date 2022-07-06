import React, { useRef, useState, useEffect } from "react";
import CategoryBadge from "./ui/CategoryBadge";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import ReadingProgress from "./ReadingProgress/readingProgress";
import VotesBadge from "./ui/VotesBadge";

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

  const [votes, setVotes] = useState([]);

  useEffect(() => {
    setVotes(post.votes.length);
  }, [post.votes.length]);

  return (
    <>
      <ReadingProgress target={target} />
      <div ref={target} className="lg:p-2 lg:pt-0 pb-12 mb-8 rounded-lg ">
        <div className="flex mb-6">
          {post.categories.map((category) => (
            <CategoryBadge key={category.name} category={category} />
          ))}
          <CreatedAtBadge
            postCreatedAt={post.createdAt}
            categoryColor={categoryColor}
            customClass=""
            showIcon
          />
          <CommentsCount post={post} categoryColor={categoryColor} />
          <VotesBadge categoryColor={categoryColor} votes={votes} />
        </div>
        <div
          className="bg-cover"
          style={{ backgroundImage: `url("${post.featuredImage.url}")` }}
        >
          <div className="bg-center bg-gradient-to-b from-gray-400 via-gray-700 to-black p-4">
            <h1 className="mb-8 text-6xl font-semibold leading-normal pr-8">
              {post.title}
            </h1>
            <p className="mb-8 text-lg font-normal leading-normal">
              {post.excerpt}
            </p>
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
