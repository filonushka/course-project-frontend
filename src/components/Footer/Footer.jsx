import React from "react";
import { Link } from "react-router-dom";
import { appRoutes, filters } from "../../const";

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
          to={appRoutes.home}
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <h6 class="logo">REVIEW HUNTER</h6>
        </Link>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <Link to={appRoutes.movies} class="nav-link px-2 text-light">
              {filters.movies}
            </Link>
          </li>
          <li class="nav-item">
            <Link to={appRoutes.books} class="nav-link px-2 text-light">
              {filters.books}
            </Link>
          </li>
          <li class="nav-item">
            <Link to={appRoutes.games} class="nav-link px-2 text-light">
              {filters.games}
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
