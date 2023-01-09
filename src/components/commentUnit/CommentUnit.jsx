import React from "react";
import { useSelector } from "react-redux";

import dayjs from "dayjs";

function CommentUnit(props) {
  const currentDate = dayjs(props.comment.createdDate).format(
    "HH:mm MM-DD-YYYY"
  );

  return (
    <div class="container py-2 my-2 border border-dark border-1 rounded">
      <div class="d-flex justify-content-between">
        <span class="text-warning fw-bold">{props.comment.name}</span>
        <span class="fw-light fst-italic text-warning">{currentDate}</span>
      </div>
      <div class="postcard__preview-txt ">{props.comment.commentContent}</div>
    </div>
  );
}

export default CommentUnit;
