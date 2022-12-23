import React from "react";
import { useState } from "react";
import { mockData as data } from "../../mock-data.js/mock-data";
import "./ReviewPage.scss";
import { Link, useParams } from "react-router-dom";
import { getCountGrade } from "../../utils/utils";
import { filters, appRoutes } from "../../const";
import CreateCommentModal from "../../components/CreateCommentModal/CreateCommentModal";

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
                      <p>
                        {getCountGrade(obj.grades)}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-bookmark-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"
                          ></path>
                        </svg>
                      </p>
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
                            class="bi bi-chat-square-heart-fill svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"></path>
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
                                {changeDateFormat(el.date)}
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
                                  {console.log(obj.comments.slice(0, 3))}
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
