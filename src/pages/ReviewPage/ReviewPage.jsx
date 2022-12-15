import React from "react";
import { mockData as data } from "../../mock-data.js/mock-data";
import "./ReviewPage.scss";

function ReviewPage() {
  return (
    <div className="review-containter container">
      <img
        class="postcard__img"
        src={data[0].reviewImageUrl}
        alt="piece of art"
      />
      <div className="text-white">{data[0].reviewContent}</div>
    </div>
  );
}

export default ReviewPage;
