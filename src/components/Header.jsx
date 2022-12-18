import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filters, appRoutes } from "../const.js";
import { changeCategory } from "../redux/slicers/filterCategorySlice";
import SignIn from "../pages/SignIn.jsx";
import "./Header.scss";

function Header(props) {
  const [activeSignIn, setSignInActive] = useState(false);
  const selectedCategory = useSelector(
    (state) => state.filterCategory.selectedCategory
  );
  const dispatch = useDispatch();

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
        <div class="col-md-3 text-end">
          <button
            type="button"
            class="btn btn-outline-warning signin-button"
            onClick={() => setSignInActive(true)}
          >
            Sign in
          </button>
        </div>
      </header>
      <SignIn active={activeSignIn} setActive={setSignInActive} />
    </div>
  );
}

export default Header;
