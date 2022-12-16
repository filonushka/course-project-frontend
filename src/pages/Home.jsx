import React from "react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { Categories } from "../const";
import { mockData as data } from "../mock-data.js/mock-data";

function Home() {
  return (
    <>
      <div>
        <h1 class="h1 text-center" id="pageHeaderTitle">
          {Categories.Movies}
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
          {Categories.Books}
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
          {Categories.Games}
        </h1>
      </div>
    </>
  );
}

export default Home;
