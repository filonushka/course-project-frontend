import React from "react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { filters, categories } from "../const";
import { mockData as data } from "../mock-data.js/mock-data";
import { useDispatch, useSelector } from "react-redux";

import axios from "../axios";
import { fetchAuth } from "../redux/slicers/auth";

function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  React.useEffect(() => {
    // dispatch(fetchAuth());
  }, []);

  const selectedCategory = useSelector(
    (state) => state.filterCategory.selectedCategory
  );
  return (
    <ul class="justify-content-center">
      {categories.map(
        (category) =>
          selectedCategory === filters.allReviews && (
            <li class="nav-link px-2 text-dark text-t">
              <h2 class="text-center">{filters[category] || category}</h2>
              <ul>
                {data
                  .filter((item) => item.category === filters[category])
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

export default Home;
