import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import StarGrade from "../starGrade/StarGrade";
import "./ReviewCard.scss";

function ReviewCard(props) {
  const tags = Array.from(props.tags);

  return (
    <>
      <section class="dark">
        <div class="container py-4">
          <article class="postcard dark blue">
            <Link
              to={`/review-details/${props._id}`}
              class="postcard__img_link"
            >
              <img
                class="postcard__img"
                src={props.reviewImageUrl}
                alt="Review preview"
              />
            </Link>
            <div class="postcard__text">
              <h1 class="postcard__title blue">
                <Link to={`/review-details/${props._id}`}>
                  {props.productTitle}: {props.reviewTitle}
                </Link>
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

              <StarGrade allGrades={props.grades} />

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
                  </svg>{" "}
                  {props.likes}
                </button>

                <Link to={`/review-details/${props._id}`}>
                  <button type="button" class="btn btn-dark">
                    Read review
                  </button>
                </Link>
              </div>
              <ul class="postcard__tagbox">
                {tags.map((tag) => (
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

export default ReviewCard;
