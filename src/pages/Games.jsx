import React from "react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { filters, categories } from "../const";
import { mockData as data } from "../mock-data.js/mock-data";

function Games() {
  return (
    <ul class="justify-content-center">
      {categories.map(
        (category) =>
          category === filters.games.toLowerCase() && (
            <li class="nav-link px-2 text-dark text-t">
              <h2 class="text-center">{filters.games}</h2>
              <ul>
                {data
                  .filter((item) => item.category === filters.games)
                  .map((obj) => (
                    <li class="nav-link">
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
                    </li>
                  ))}
              </ul>
            </li>
          )
      )}
    </ul>
  );
}

export default Games;
