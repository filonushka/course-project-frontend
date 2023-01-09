import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchFullReview } from "../../redux/slicers/fullReview.js";
import { fetchReviews } from "../../redux/slicers/reviews";
import { useDispatch } from "react-redux";
import CardLoader from "../../components/cardLoader/CardLoader";
import { selectIsAuth } from "../../redux/slicers/auth";

import EditReviewModal from "../editReviewModal/EditReviewModal";

import StarGrade from "../starGrade/StarGrade";

function FullReviewCard(props) {
  const dispatch = useDispatch();
  const [activeEditReview, setEditReviewActive] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const { id } = useParams();
  const reviews = useSelector((state) => state.reviews.reviews);
  const isReviewsLoading = reviews.status === "loading";

  React.useEffect(() => {
    dispatch(fetchReviews());
    dispatch(fetchFullReview({ _id: id }));
  }, [dispatch, id]);
  return (
    <>
      {isReviewsLoading && (
        <div>
          <h2 class="text-center">Loading...</h2>
          <CardLoader />
        </div>
      )}
      <section class="dark">
        {reviews.items.map(
          (obj) =>
            obj._id === id && (
              <div class="container py-4">
                <article class="postcard dark blue">
                  <>
                    <img
                      class="postcard__img"
                      src={obj.reviewImageUrl}
                      alt="Review preview"
                    />
                    <div class="postcard__text">
                      <h2 class="postcard__title">
                        {obj.productTitle}: {obj.reviewTitle}
                      </h2>
                      <div class="postcard__subtitle small">
                        <i class="fas fa-calendar-alt mr-2"></i>
                        <b>{obj.category}</b>
                      </div>
                      <div class="postcard__bar"></div>
                      <div class="postcard__preview-txt">
                        {obj.reviewContent}
                      </div>
                      <p>
                        Author: <b>{obj.user.name}</b>
                      </p>
                      <StarGrade allGrades={obj.grades} key={Math.random()} />
                      <p>
                        Rating: <b>{obj.rating}/10</b>
                      </p>

                      <div>
                        <button type="button" class="btn btn-dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-heart-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                            />
                          </svg>{" "}
                          {obj.likes.length}
                        </button>
                      </div>

                      <ul class="postcard__tagbox">
                        {obj.tags.map((tag) => (
                          <li class="tag__item">
                            <i class="fas fa-tag mr-2"></i>
                            {tag}
                          </li>
                        ))}
                      </ul>
                      {isAuth && (
                        <div className="btns-edit d-flex gap-2 justify-content-end mt-3">
                          <button
                            type="button"
                            class="btn btn-outline-warning "
                            onClick={() => setEditReviewActive(true)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"></path>
                            </svg>{" "}
                            Edit
                          </button>
                          <button type="button" class="btn btn-outline-danger ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path
                                fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              />
                            </svg>{" "}
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                </article>
                <EditReviewModal
                  active={activeEditReview}
                  setActive={setEditReviewActive}
                />
              </div>
            )
        )}
      </section>
    </>
  );
}

export default FullReviewCard;
