import React from "react";
import "./CreateCommentModal.scss";

function CreateCommentModal({ active, setActive }) {
  return (
    <>
      <div
        className={active ? "modal-active" : "modal"}
        onClick={() => setActive(true)}
      >
        <section
          class="comment-window-body"
          onClick={(e) => e.stopPropagation()}
        >
          <article class="postcard dark blue my-0 mx-0">
            <div class="postcard__text">
              <h2 class="postcard__title">Write a comment</h2>
              <div class="form-floating">
                <textarea
                  placeholder="Enter your comment here..."
                  class="p-2 mb-3 rounded form-control-dark text-bg-dark"
                  id="floatingTextarea2"
                  style={{ height: "200px", width: "500px" }}
                ></textarea>
                <label for="floatingTextarea2"></label>
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
                  value="Post comment"
                  onClick={() => setActive(false)}
                ></input>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default CreateCommentModal;
