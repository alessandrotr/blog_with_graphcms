import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";
import { comment } from "postcss";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, [slug]);

  return (
    <>
      {comment.length > 0 && (
        <div className="bg-secondaryLight dark:bg-secondaryDark p-8 p-12 mb-8 rounded-lg">
          <h3 className="text-xl mb-8 font-semibold border-b-2 border-colorItems pb-4">
            {comments.length}
            {"\u00A0"}
            Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-b border-primaryLight dark:border-primaryDark mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span>
                <span className="text-xs ml-2">
                  ({moment(comment.createdAt).format("MM DD, YYYY")})
                </span>
              </p>

              <p className="whitespace-pre-line text-primaryDark dark:text-primaryLight w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
