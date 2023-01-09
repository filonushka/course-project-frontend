import React from "react";
import { useState } from "react";
import "./EditReviewModal.scss";
import { filters } from "../../const";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slicers/auth";

import axios from "../../axios";

function EditReviewModal({ active, setActive }) {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onSubmit = async () => {};

  return (
    <>
      <div
        className={active ? "modal-active" : "modal"}
        onClick={() => setActive(true)}
      >
        <section class="new-review-body" onClick={(e) => e.stopPropagation()}>
          <article class="postcard dark blue my-0 mx-0">
            <div class="postcard__text">
              <h2 class="postcard__title">Edit the review</h2>
              <div class="review-content mt-3">
                <div class=" category input-group mb-3 ">
                  <label
                    class="input-group-text bg-warning"
                    for="inputGroupSelect01"
                  >
                    Category
                  </label>
                  <select
                    class="form-select bg-dark text-light"
                    id="inputGroupSelect01"
                  >
                    <option selected>
                      Choose the category of the product...
                    </option>
                    <option value="1">{filters.movies}</option>
                    <option value="2">{filters.books}</option>
                    <option value="3">{filters.games}</option>
                  </select>
                </div>

                <div class="product-title input-group mb-3">
                  <span
                    class="input-group-text bg-warning"
                    id="inputGroup-sizing-default"
                  >
                    Product Title
                  </span>
                  <input
                    type="text"
                    class="form-control bg-dark text-light"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  ></input>
                </div>

                <div class="review-title input-group mb-3">
                  <span
                    class="input-group-text bg-warning"
                    id="inputGroup-sizing-default"
                  >
                    Review Title
                  </span>
                  <input
                    type="text"
                    class="form-control bg-dark text-light"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  ></input>
                </div>

                <div class="review-image input-group mb-3">
                  <span
                    class="input-group-text bg-warning"
                    id="inputGroup-sizing-default"
                  >
                    Image
                  </span>
                  <input
                    type="text"
                    class="form-control bg-dark text-light  "
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  ></input>
                </div>

                <div class="review-rating input-group mb-3">
                  <label
                    class="input-group-text bg-warning"
                    for="inputGroupSelect01"
                  >
                    Rating
                  </label>
                  <select
                    class="form-select bg-dark text-light"
                    id="inputGroupSelect01"
                  >
                    <option selected>Your rating from 1 to 10</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="1">4</option>
                    <option value="2">5</option>
                    <option value="3">6</option>
                    <option value="1">7</option>
                    <option value="2">8</option>
                    <option value="3">9</option>
                    <option value="1">10</option>
                  </select>
                </div>

                <div class="review-content input-group mb-3">
                  <textarea
                    placeholder="Enter your comment here..."
                    class="p-2 mb-3 rounded form-control-dark text-bg-dark"
                    id="reviewContent"
                    style={{ height: "250px", width: "550px" }}
                  ></textarea>
                  <label for="reviewContent"></label>
                </div>

                <div class="review-tags input-group mb-3">
                  <input
                    type="text"
                    class="form-control bg-dark text-light"
                    placeholder="Add some tags"
                    aria-label="Tags"
                    aria-describedby="button-addon2"
                  ></input>
                  <button
                    class="btn btn-warning"
                    type="button"
                    id="button-addon2"
                  >
                    Add tag
                  </button>
                </div>
              </div>

              <div class="container py-4 d-flex justify-content-end flex-end">
                <button
                  type="button"
                  class="btn-lg btn btn-dark"
                  onClick={() => setActive(false)}
                >
                  Close
                </button>
                <input
                  class="btn btn-warning btn-lg "
                  type="submit"
                  value="Save changes"
                  onClick={onSubmit}
                ></input>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default EditReviewModal;
