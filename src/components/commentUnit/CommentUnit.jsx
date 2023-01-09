import React from "react";

import dayjs from "dayjs";

function CommentUnit(props) {
  const currentDate = dayjs(props.comment.date).format("HH:mm MM-DD-YYYY");

  return (
    <div class="container py-2   my-2 border border-dark border-1 rounded">
      <div class="d-flex justify-content-between">
        <span class="text-warning fw-bold">{props.comment.user}</span>
        {console.log(props.date)}
        <span class="fw-light fst-italic text-warning">{currentDate}</span>
      </div>
      <div class="postcard__preview-txt ">{props.comment.comment}</div>
    </div>
  );
}

export default CommentUnit;
