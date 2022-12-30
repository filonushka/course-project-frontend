import React from "react";
import { useState } from "react";
import { mockData as data } from "../../mock-data.js/mock-data";
import "./ReviewPage.scss";
import { Link, useParams } from "react-router-dom";
import { getCountGrade } from "../../utils/utils";
import {
  drawFilledStar,
  drawHalfFilledStar,
  drawEmptyStar,
} from "../../utils/utils";
import CreateCommentModal from "../../components/CreateCommentModal/CreateCommentModal";
import EmptyStar from "../../components/GradeStars/EmptyStar";
import FilledStar from "../../components/GradeStars/FilledStar";
import HalfFilledStar from "../../components/GradeStars/HalfFilledStar";

import dayjs from "dayjs";
function changeDateFormat(date) {
  const today = date;
  let options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeStyle: "short",
    timeZoneName: "short",
  };
  const now = today.toLocaleString("en-GB", options);
  return now;
}

function ReviewPage(props) {
  const { reviewTitle, reviewId } = useParams();
  const [isShowMoreBtnOpen, setIsShowMoreBtnOpen] = useState(false);
  const [activeWriteComment, setWriteCommentActive] = useState(false);
  const toggleShowMoreBtn = () =>
    setIsShowMoreBtnOpen((isShowMoreBtnOpen) => !isShowMoreBtnOpen);

  return (
    <>
      <section class="dark">
        {data.map(
          (obj) =>
            obj.reviewId === reviewId && (
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
                        Author: <b>{obj.author}</b>
                      </p>
                      <div>
                        {drawFilledStar(getCountGrade(obj.grades)).map((el) => (
                          <FilledStar />
                        ))}
                        {drawHalfFilledStar(getCountGrade(obj.grades)).map(
                          (el) => (
                            <HalfFilledStar />
                          )
                        )}
                        {getCountGrade(obj.grades) >= 4.3 ||
                          drawEmptyStar(getCountGrade(obj.grades)).map((el) => (
                            <EmptyStar />
                          ))}
                      </div>
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
                          </svg>
                          {obj.likes.length}
                        </button>
                        <Link to="/review-details">
                          <button type="button" class="btn btn-dark">
                            Read more
                          </button>
                        </Link>
                      </div>
                      <ul class="postcard__tagbox">
                        {obj.tags.map((tag) => (
                          <li class="tag__item">
                            <i class="fas fa-tag mr-2"></i>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                </article>
              </div>
            )
        )}
      </section>
      <section class="dark">
        {data.map(
          (obj) =>
            obj.reviewId === reviewId && (
              <div class="container py-4">
                <article class="postcard dark blue">
                  <>
                    <div class="postcard__text pl-0">
                      <h2 class="postcard__title">Comments</h2>
                      <div class="postcard__bar"></div>
                      {Object.values(
                        obj.comments.slice(0, 3).map((el) => (
                          <div class="container py-2   my-2 border border-dark border-1 rounded">
                            <div class="d-flex justify-content-between">
                              <span class="text-warning fw-bold">
                                {el.user}
                              </span>
                              <span class="fw-light fst-italic text-warning">
                                {dayjs(el.date).format("HH:mm MMM-D-YYYY ")}
                              </span>
                            </div>
                            <div class="postcard__preview-txt ">
                              {el.comment}
                            </div>
                          </div>
                        ))
                      )}
                      {isShowMoreBtnOpen &&
                        Object.values(
                          obj.comments.slice(3, -1).map((el) => (
                            <div class="container py-2   my-2 border border-dark border-1 rounded">
                              <div class="d-flex justify-content-between">
                                <span class="text-warning fw-bold">
                                  {el.user}
                                </span>
                                <span class="fw-light fst-italic text-warning">
                                  {changeDateFormat(el.date)}
                                </span>
                              </div>
                              <div class="postcard__preview-txt ">
                                {el.comment}
                              </div>
                            </div>
                          ))
                        )}
                    </div>
                  </>
                </article>
              </div>
            )
        )}
      </section>
      <section>
        <div class="container py-4 d-flex justify-content-between flex-end">
          {!isShowMoreBtnOpen ? (
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => toggleShowMoreBtn()}
            >
              Show more
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => toggleShowMoreBtn()}
            >
              Show less
            </button>
          )}
          <button
            type="button "
            class="btn btn-warning  btn-lg"
            onClick={() => setWriteCommentActive(true)}
          >
            Write a comment
          </button>
        </div>
      </section>
      <CreateCommentModal
        active={activeWriteComment}
        setActive={setWriteCommentActive}
      />
    </>
  );
}

export default ReviewPage;
