import React from "react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { mockData as data } from "../mock-data.js/mock-data";

function Games() {
  return (
    <div class="text-light">
      {data.map((obj) => (
        <ReviewCard
          reviewImageUrl={obj.reviewImageUrl}
          productTitle={obj.productTitle}
          reviewTitle={obj.reviewTitle}
          category={obj.category}
          author={obj.author}
          reviewExtract={obj.reviewExtract}
          rating={obj.rating}
          likes={obj.likes.length}
          tags={obj.tags}
          grades={obj.grades}
        />
      ))}
    </div>
  );
}

export default Games;
