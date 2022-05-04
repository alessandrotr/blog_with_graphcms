import React from "react";
import moment from "moment";

import { MdOutlineDateRange } from "react-icons/md";

// text-primaryDark dark:text-primaryLight bg-primaryLight dark:bg-primaryDark

const CreatedAtBadge = (props) => {
  return (
    <p className={`${props.customClass}`}>
      {props.showIcon && (
        <MdOutlineDateRange
          style={{ color: props.categoryColor }}
          className="h-5 w-5 inline mr-2"
        />
      )}
      {moment(props.postCreatedAt).format("MMM DD, YYYY")}
    </p>
  );
};

export default CreatedAtBadge;
