import React from "react";
import ReviewCard from "../components/reviewCard/ReviewCard";
import CardLoader from "../components/cardLoader/CardLoader";
import { filters, categories } from "../const";

import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../redux/slicers/reviews";

function Books() {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);

  const isReviewsLoading = reviews.status === "loading";

  React.useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <ul class="justify-content-center">
      {categories.map(
        (category) =>
          category === filters.books.toLowerCase() && (
            <li class="nav-link px-2 text-dark text-t">
              <h2 class="text-center">{filters.books}</h2>
              {isReviewsLoading && <CardLoader />}

              <ul>
                {reviews.items
                  .filter((item) => item.category === filters[category])
                  .map((obj, index) =>
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

export default Books;
