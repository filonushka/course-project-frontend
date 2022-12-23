import React from "react";
import "./SignOut.scss";

function SignOut({ active, setActive }) {
  return (
    <>
      <div
        className={active ? "modal-active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div
          class="auth-body d-md-flex align-items-center justify-content-between"
          onClick={(e) => e.stopPropagation()}
        >
          <div class="box-1 mt-md-0 mt-5">
            <h5 class="logo sign-in-logo">REVIEW HUNTER</h5>

            <img src="/img/signOut-img.jpg" alt="auth page" />
          </div>
          <div class=" box-2 d-flex flex-column h-100">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
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
              <p class="h-1">Sign Out</p>

              <div>
                <p class="text-muted">Are you sure you want to log-off?</p>
                <div class="btn btn-dark">
                  Sign Out<span class="fas fa-chevron-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span class="fas fa-times" onClick={() => setActive(false)}></span>
      </div>
    </>
  );
}

export default SignOut;
