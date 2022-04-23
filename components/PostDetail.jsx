import React, { useRef } from "react";
import CategoryBadge from "./ui/CategoryBadge";
import CreatedAtBadge from "./ui/CreatedAtBadge";
import CommentsCount from "./ui/CommentsCount";
import ReadingBar from "./ui/ReadingBar";

const PostDetail = ({ post }) => {
  const ref = useRef();
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

  return (
    <div ref={ref} className="lg:p-8 lg:pt-0 pb-12 mb-8 rounded-lg ">
      <ReadingBar ref={ref.current} />
      <div className="flex justify-between items-end mb-6">
        <div className="flex w-6/12">
          <CreatedAtBadge
            postCreatedAt={post.createdAt}
            showIcon
            className=""
          />
          <CommentsCount post={post} customClass="" iconClass="text-sm" />
        </div>
        <div>
          {post.categories.map((category) => {
            return <CategoryBadge key={category.name} category={category} />;
          })}
        </div>
      </div>
      <h1 className="mb-8 text-4xl font-semibold leading-normal">
        {post.title}
      </h1>
      <p className="mb-8 text-lg font-normal leading-normal">{post.excerpt}</p>
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full"
        />
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
  );
};

export default PostDetail;
