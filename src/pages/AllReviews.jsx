import React from "react";
import MovieReviewCard from "../components/ReviewCard/MovieReviewCard";
import BookReviewCard from "../components/ReviewCard/BookReviewCard";
import GameReviewCard from "../components/ReviewCard/GameReviewCard";
import { Categories } from "../const";
import { mockData as data } from "../mock-data.js/mock-data";

function AllReviews() {
  return (
    <>
      <div>
        <h1 class="h1 text-center" id="pageHeaderTitle">
          {Categories.Movies}
        </h1>
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
      <div>
        <h1 class="h1 text-center" id="pageHeaderTitle">
          {Categories.Books}
        </h1>
        <BookReviewCard />
      </div>
      <div>
        <h1 class="h1 text-center" id="pageHeaderTitle">
          {Categories.Games}
        </h1>
        <GameReviewCard />
      </div>
    </>
  );
}

export default AllReviews;
