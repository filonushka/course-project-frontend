import React from "react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { useDispatch, useSelector } from "react-redux";

import { filters, categories } from "../const";
import { fetchReviews } from "../redux/slicers/reviews";

function Movies() {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);

  const isReviewsLoading = reviews.status === "loading";

  React.useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  return (
    <ul class="justify-content-center">
      {categories.map(
        (category) =>
          category === filters.movies.split(" ")[0].toLowerCase() && (
            <li class="nav-link px-2 text-dark text-t">
              <h2 class="text-center">{filters.movies}</h2>
              <ul>
                {(isReviewsLoading
                  ? [...Array(5)]
                  : reviews.items.filter(
                      (item) => item.category === filters[category]
                    )
                ).map((obj, index) =>
                  isReviewsLoading ? (
                    <li class="nav-link">
                      <ReviewCard
                        reviewImageUrl="https://i.pinimg.com/originals/80/b5/81/80b5813d8ad81a765ca47ebc59a65ac3.jpg"
                        productTitle=""
                        reviewTitle=""
                        category=""
                        author=""
                        reviewExtract=""
                        rating=""
                        likes=""
                        tags=""
                        grades=""
                      />
                    </li>
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
                        grades=""
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

export default Movies;
