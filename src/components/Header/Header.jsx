import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filters, appRoutes } from "../../const.js";
import { changeCategory } from "../../redux/slicers/filterCategorySlice";
import SignIn from "../../pages/SignInPage/SignIn";
import SignOut from "../../pages/SignOutPage/SignOut";

import "./Header.scss";
import CreateReviewModal from "../CreateReviewModal/CreateReviewModal.jsx";

function Header(props) {
  const [activeSignIn, setSignInActive] = useState(false);
  const [activeSignOut, setSignOutActive] = useState(false);
  const [activeCreateReview, setCreateReviewActive] = useState(false);

  const [isMyProfileOpen, setIsMyProfileOpen] = useState(false);
  const toggleMenu = () =>
    setIsMyProfileOpen((isMyProfileOpen) => !isMyProfileOpen);

  const selectedCategory = useSelector(
    (state) => state.filterCategory.selectedCategory
  );
  const dispatch = useDispatch();
  const isAuth = true;

  return (
    <div class="header-container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom border-bottom p-4">
        <Link
          to={appRoutes.home}
          onClick={() => dispatch(changeCategory(filters.allReviews))}
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none"
        >
          <h4 class="logo">REVIEW HUNTER</h4>
        </Link>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link
              to={appRoutes.allReviews}
              onClick={() => dispatch(changeCategory(filters.allReviews))}
              className={
                selectedCategory === filters.allReviews
                  ? "nav-link px-2 text-warning"
                  : "nav-link px-2 text-light"
              }
            >
              {filters.allReviews}
            </Link>
          </li>
          <li>
            <Link
              to={appRoutes.movies}
              onClick={() => dispatch(changeCategory(filters.movies))}
              className={
                selectedCategory === filters.movies
                  ? "nav-link px-2 text-warning"
                  : "nav-link px-2 text-light"
              }
            >
              {filters.movies}
            </Link>
          </li>
          <li>
            <Link
              to={appRoutes.books}
              onClick={() => dispatch(changeCategory(filters.books))}
              className={
                selectedCategory === filters.books
                  ? "nav-link px-2 text-warning"
                  : "nav-link px-2 text-light"
              }
            >
              {filters.books}
            </Link>
          </li>
          <li>
            <Link
              to={appRoutes.games}
              onClick={() => dispatch(changeCategory(filters.games))}
              className={
                selectedCategory === filters.games
                  ? "nav-link px-2 text-warning"
                  : "nav-link px-2 text-light"
              }
            >
              {filters.games}
            </Link>
          </li>
        </ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            class="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <div class="d-flex col-md-3 text-end justify-content-evenly">
          {isAuth && (
            <button
              type="button"
              class="btn btn-outline-warning signin-button"
              onClick={() => {
                setSignInActive(true);
              }}
            >
              Sign in
            </button>
          )}
          {isAuth && (
            <div class="btn-group btn-outline-warning">
              <button
                type="button"
                class="btn btn-outline-warning dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                My Profile
              </button>
              {isMyProfileOpen && (
                <ul
                  class="dropdown-menu dropdown-menu-end show"
                  style={{
                    position: "absolute",
                    inset: "0px 0px auto auto",
                    margin: "0px",
                    transform: "translate(0px, 40px)",
                    backgroundColor: "#000000",
                    border: "1px solid #212529",
                    borderRadius: "10%",
                  }}
                  data-popper-placement="bottom-end"
                >
                  <li>
                    <button class="dropdown-item text-warning" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-view-list"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"></path>
                      </svg>{" "}
                      My reviews
                    </button>
                  </li>
                  <li>
                    <button
                      class="dropdown-item text-warning"
                      onClick={() => setCreateReviewActive(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        ></path>
                      </svg>
                      Create new review
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item text-warning" href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-toggles"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z"></path>
                      </svg>
                      Settings
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
          {isAuth && (
            <button
              type="button"
              class="btn btn-outline-danger ml-5"
              onClick={() => setSignOutActive(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                ></path>
              </svg>
              Sign out
            </button>
          )}
        </div>
      </header>
      <SignIn active={activeSignIn} setActive={setSignInActive} />
      <SignOut active={activeSignOut} setActive={setSignOutActive} />
      <CreateReviewModal
        active={activeCreateReview}
        setActive={setCreateReviewActive}
      />
    </div>
  );
}

export default Header;
