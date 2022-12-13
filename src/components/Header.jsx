import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";

function Header() {
  const [activeSignIn, setSignInActive] = useState(false);

  return (
    <div class="header-container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom border-bottom p-4">
        <Link
          to="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none"
        >
          <h4 class="logo">REVIEW HUNTER</h4>
        </Link>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/movies" class="nav-link px-2 text-light">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/books" class="nav-link px-2 text-light">
              Books
            </Link>
          </li>
          <li>
            <Link to="/games" class="nav-link px-2 text-light">
              Games
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
