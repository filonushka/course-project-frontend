import React from "react";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { filters, categories } from "../const";
import { useDispatch, useSelector } from "react-redux";

import { fetchAuth } from "../redux/slicers/auth";
import { fetchReviews } from "../redux/slicers/reviews";

function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const { reviews } = useSelector((state) => state.reviews);

  const isReviewsLoading = reviews.status === "loading";

  React.useEffect(() => {
    dispatch(fetchReviews());
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
                        _id={obj._id}
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
