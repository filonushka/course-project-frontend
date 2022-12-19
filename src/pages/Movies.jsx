import React from "react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { filters, categories } from "../const";
import { mockData as data } from "../mock-data.js/mock-data";

function Movies() {
  return (
    <ul class="justify-content-center">
      {categories.map(
        (category) =>
          category === filters.movies.split(" ")[0].toLowerCase() && (
            <li class="nav-link px-2 text-dark text-t">
              <h2 class="text-center">{filters.movies}</h2>
              <ul>
                {data
                  .filter((item) => item.category === filters.movies)
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

export default Movies;
