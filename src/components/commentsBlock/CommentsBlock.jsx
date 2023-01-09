import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mockData as data } from "../../mock/mock-data";
import CommentUnit from "../commentUnit/CommentUnit";

import CreateCommentModal from "../createCommentModal/CreateCommentModal";
import { selectIsAuth } from "../../redux/slicers/auth.js";

import ShowMoreButton from "../showMoreButton/ShowMoreButton";
import { isAnyOf } from "@reduxjs/toolkit";

const commentsStep = 3;

function CommentsBlock() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const reviews = useSelector((state) => state.reviews.reviews);
  const { id } = useParams();
  const isReviewsLoading = reviews.status === "loading";
  console.log(id);

  const [isShowMoreBtnOpen, setIsShowMoreBtnOpen] = useState(false);
  const [activeWriteComment, setWriteCommentActive] = useState(false);
  const [commentsCount, setCommentsCount] = useState(commentsStep);

  const showMoreComments = () => {
    setCommentsCount(
      commentsCount + Math.min(commentsStep, data.comments.length)
    );
  };

  return (
    <>
      <section class="dark">
        {data.map(
          (obj) =>
            obj.reviewId && (
              <div class="container py-4">
                <article class="postcard dark blue">
                  <>
                    <div class="postcard__text pl-0">
                      <h2 class="postcard__title">Comments</h2>
                      <div class="postcard__bar"></div>
                      {Object.values(
                        obj.comments
                          .slice(0, commentsStep)
                          .map((el) => (
                            <CommentUnit key={el.comment.userId} comment={el} />
                          ))
                      )}

                      {/* {isShowMoreBtnOpen &&
                        Object.values(
                          obj.comments.slice(3, -1).map((el) => (
                            // <div class="container py-2   my-2 border border-dark border-1 rounded">
                            //   <div class="d-flex justify-content-between">
                            //     <span class="text-warning fw-bold">
                            //       {el.user}
                            //     </span>
                            //     <span class="fw-light fst-italic text-warning">
                            //       {changeDateFormat(el.date)}
                            //     </span>
                            //   </div>
                            //   <div class="postcard__preview-txt ">
                            //     {el.comment}
                            //   </div>
                            // </div>
                          // ))
                        )} */}
                    </div>
                  </>
                </article>
              </div>
            )
        )}
      </section>
      <div>
        {data.map(
          (obj) =>
            obj.comments.length > commentsCount && (
              <button
                type="button"
                class="btn btn-dark"
                // onClick={() => toggleShowMoreBtn()}
              >
                Show more
              </button>
            )
        )}

        {isAuth && (
          <>
            <CreateCommentModal
              active={activeWriteComment}
              setActive={setWriteCommentActive}
            />
            <div class="container py-4 d-flex justify-content-between flex-end">
              <button
                type="button "
                class="btn btn-warning  btn-lg"
                onClick={() => setWriteCommentActive(true)}
              >
                Write a comment
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CommentsBlock;
