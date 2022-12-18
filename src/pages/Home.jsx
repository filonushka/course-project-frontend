import React from "react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { filters } from "../const";
import { mockData as data } from "../mock-data.js/mock-data";

function Home() {
  return (
    <>
      <div>
        <h1 class="h1 text-center" id="pageHeaderTitle">
          {filters.Movies}
        </h1>
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
      <div>
        <h1 class="h1 text-center" id="pageHeaderTitle">
          {filters.Books}
        </h1>
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
      <div>
        <h1 class="h1 text-center" id="pageHeaderTitle">
          {filters.Games}
        </h1>
      </div>
    </>
  );
}

export default Home;
