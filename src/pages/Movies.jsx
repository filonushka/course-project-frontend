import React from "react";
import MovieReviewCard from "../components/ReviewCard/MovieReviewCard";
import { mockData as data } from "../mock-data.js/mock-data";

function Movies() {
  return (
    <div class="text-light">
      {data.map((obj) => (
        <MovieReviewCard
          reviewImageUrl={obj.reviewImageUrl}
          productTitle={obj.productTitle}
          reviewTitle={obj.reviewTitle}
          category={obj.category}
          author={obj.author}
          reviewExtract={obj.reviewExtract}
          rating={obj.rating}
          likes={obj.likes.length}
          tags={obj.tags}
        />
      ))}
    </div>
  );
}

export default Movies;
