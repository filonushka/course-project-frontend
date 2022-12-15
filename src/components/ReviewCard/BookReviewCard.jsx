import React from "react";
import "./ReviewCard.scss";
import { Link } from "react-router-dom";

function BookReviewCard() {
  return (
    <>
      <section class="dark">
        <div class="container py-4">
          <article class="postcard dark green">
            <Link to="/review-details" class="postcard__img_link">
              <img
                class="postcard__img"
                src="https://media.s-bol.com/DY9K0jOzlggk/wV6q0xg/550x836.jpg"
                alt="Review preview"
              />
            </Link>
            <div class="postcard__text">
              <h1 class="postcard__title green">
                <Link to="/review-details">
                  Flowers for Algernon review: an amazing journey that makes you
                  take a step back and rethink things
                </Link>
              </h1>
              <div class="postcard__subtitle small">
                <i class="fas fa-calendar-alt mr-2"></i>
                <b>Books</b>
              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                Flowers for Algernon is a book that says to you: “I want you to
                question everything you know
              </div>
              <p>
                Autor: <b>Filonushka</b>
              </p>
              <p>
                Rating: <b>10/10</b>
              </p>
              <div>
                <button type="button" class="btn btn-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat-square-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"></path>
                  </svg>
                  17
                </button>
                <Link to="/review-details">
                  <button type="button" class="btn btn-dark">
                    Read more
                  </button>
                </Link>
              </div>
              <ul class="postcard__tagbox">
                <li class="tag__item">
                  <i class="fas fa-tag mr-2"></i>tag1
                </li>
                <li class="tag__item">
                  <i class="fas fa-tag mr-2"></i>tag2
                </li>
                <li class="tag__item">
                  <i class="fas fa-tag mr-2"></i>tag3
                </li>
              </ul>
              <div>
                <button type="button" class="btn btn-outline-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pen"
                    viewBox="0 0 16 16"
                  >
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"></path>
                  </svg>
                  Edit
                </button>
                <button type="button" class="btn btn-outline-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default BookReviewCard;
