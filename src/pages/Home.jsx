import React from "react";
import ReviewCard from "../components/reviewCard/ReviewCard";
import { filters, categories } from "../const";
import { useDispatch, useSelector } from "react-redux";

import { fetchAuth } from "../redux/slicers/auth";
import { fetchReviews } from "../redux/slicers/reviews";
import CardLoader from "../components/cardLoader/CardLoader";

function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const reviews = useSelector((state) => state.reviews.reviews);

  const isReviewsLoading = reviews.status === "loading";

  React.useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

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
              {isReviewsLoading && <CardLoader />}

              <ul>
                {reviews.items
                  .filter((item) => item.category === filters[category])
                  .map((obj) =>
                    isReviewsLoading ? (
                      <li class="nav-link"></li>
                    ) : (
                      <li class="nav-link">
                        <ReviewCard
                          reviewImageUrl={obj.reviewImageUrl}
                          productTitle={obj.productTitle}
                          reviewTitle={obj.reviewTitle}
                          category={obj.category}
                          author={obj.user.name}
                          reviewExtract={obj.reviewExtract}
                          rating={obj.rating}
                          likes={obj.likes.length}
                          tags={obj.tags}
                          grades={obj.grades}
                          _id={obj._id}
                          key={obj._id}
                        />
                      </li>
                    )
                  )}
              </ul>
            </li>
          )
      )}
    </ul>
  );
}

export default Home;
