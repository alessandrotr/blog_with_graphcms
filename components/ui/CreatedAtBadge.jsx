import React from "react";
import moment from "moment";

import { MdOutlineDateRange } from "react-icons/md";

const CreatedAtBadge = (props) => {
  return (
    <p
      className={`text-primaryLight font-semibold text-xs bg-primaryDarkOpacity p-2 flex items-center ${
        props.customPosition
          ? "-ml-2 mb-2 bg-primaryDarkOpacity dark:bg-primaryLight text-primaryLight dark:text-primaryDark"
          : "bg-primaryDarkOpacity absolute left-2 top-2"
      }`}
    >
      <MdOutlineDateRange className="h-5 w-5 inline mr-2 text-colorItems" />
      {moment(props.postCreatedAt).format("MMM DD, YYYY")}
    </p>
  );
};

export default CreatedAtBadge;