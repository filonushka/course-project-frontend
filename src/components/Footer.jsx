import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes, Categories } from "../const";

function Footer() {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top p-4">
        <div class="col-md-4 mb-0 text-muted">
          <span class="">
            © 2022, created by
            <a
              href="https://github.com/filonushka"
              class="text-decoration-none fw-bold text-white-50"
              target="_blank"
            >
              {" "}
              filonushka
            </a>
          </span>
        </div>
        <Link
          to={AppRoutes.Home}
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <h6 class="logo">REVIEW HUNTER</h6>
        </Link>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <Link to={AppRoutes.Movies} class="nav-link px-2 text-light">
              {Categories.Movies}
            </Link>
          </li>
          <li class="nav-item">
            <Link to={AppRoutes.Books} class="nav-link px-2 text-light">
              {Categories.Books}
            </Link>
          </li>
          <li class="nav-item">
            <Link to={AppRoutes.Games} class="nav-link px-2 text-light">
              {Categories.Games}
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;