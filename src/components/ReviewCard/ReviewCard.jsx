import React from "react";
import { getCountGrade } from "../../utils/utils";
import { Link } from "react-router-dom";
import { mockData as data } from "../../mock-data.js/mock-data";
import {
  drawFilledStar,
  drawHalfFilledStar,
  drawEmptyStar,
} from "../../utils/utils";
import EmptyStar from "../../components/GradeStars/EmptyStar";
import FilledStar from "../../components/GradeStars/FilledStar";
import HalfFilledStar from "../../components/GradeStars/HalfFilledStar";

import "./ReviewCard.scss";

function MovieReviewCard(props) {
  return (
    <>
      <section class="dark">
        <div class="container py-4">
          <article class="postcard dark blue">
            <Link to="/review-details" class="postcard__img_link">
              <img
                class="postcard__img"
                src={props.reviewImageUrl}
                alt="Review preview"
              />
            </Link>
            <div class="postcard__text">
              <h1 class="postcard__title blue">
                {data.map(
                  (obj) =>
                    obj.productTitle === props.productTitle && (
                      <Link
                        key={obj.reviewId}
                        to={`/review-details/${obj.reviewTitle}/${obj.reviewId}`}
                      >
                        {props.productTitle}: {props.reviewTitle}
                      </Link>
                    )
                )}
              </h1>
              <div class="postcard__subtitle small">
                <i class="fas fa-calendar-alt mr-2"></i>
                <b>{props.category}</b>
              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">{props.reviewExtract}</div>
              <p>
                Author: <b>{props.author}</b>
              </p>

              <div>
                {/* {getCountGrade(props.grades)} */}

                {drawFilledStar(getCountGrade(props.grades)).map((el) => (
                  <FilledStar />
                ))}
                {drawHalfFilledStar(getCountGrade(props.grades)).map((el) => (
                  <HalfFilledStar />
                ))}
                {getCountGrade(props.grades) >= 4.3 ||
                  drawEmptyStar(getCountGrade(props.grades)).map((el) => (
                    <EmptyStar />
                  ))}
              </div>
              <p>
                Rating: <b>{props.rating}/10</b>
              </p>
              <div>
                <button type="button" class="btn btn-dark ">
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
                  {props.likes}
                </button>
                {data.map(
                  (obj) =>
                    obj.productTitle === props.productTitle && (
                      <Link
                        key={obj.reviewId}
                        to={`/review-details/${obj.reviewTitle}/${obj.reviewId}`}
                      >
                        <button type="button" class="btn btn-dark">
                          Read review
                        </button>
                      </Link>
                    )
                )}
              </div>
              <ul class="postcard__tagbox">
                {props.tags.map((tag) => (
                  <li class="tag__item">
                    <i class="fas fa-tag mr-2"></i>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default MovieReviewCard;
