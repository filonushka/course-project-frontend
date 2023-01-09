import React from "react";
import "./ReviewPage.scss";

import FullReviewCard from "../../components/fullReviewCard/FullReviewCard";
import CommentsBlock from "../../components/commentsBlock/CommentsBlock";

function ReviewPage(props) {
  return (
    <>
      <FullReviewCard key={Math.random()} />
      <CommentsBlock key={Math.random()} />
    </>
  );
}

export default ReviewPage;
