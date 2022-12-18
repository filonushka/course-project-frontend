import React from "react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { filters, categories } from "../const";
import { mockData as data } from "../mock-data.js/mock-data";
import { useSelector } from "react-redux";

function Books() {
  const selectedCategory = useSelector(
    (state) => state.filterCategory.selectedCategory
  );
  console.log(selectedCategory);
  return (
    <ul class="justify-content-center">
      {categories.map(
        (category) =>
          selectedCategory === "Books" && (
            <li class="nav-link px-2 text-dark text-t">
              <h2 class="text-center">{selectedCategory}</h2>
              <ul>
                {data
                  .filter((item) => item.category === "Books")
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

export default Books;
