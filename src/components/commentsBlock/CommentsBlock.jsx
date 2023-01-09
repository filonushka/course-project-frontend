import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFullReview } from "../../redux/slicers/fullReview.js";
import { fetchReviews } from "../../redux/slicers/reviews";
import CommentUnit from "../commentUnit/CommentUnit";
import CardLoader from "../../components/cardLoader/CardLoader";
import CreateCommentModal from "../createCommentModal/CreateCommentModal";
import { selectIsAuth } from "../../redux/slicers/auth.js";

// import ShowMoreButton from "../showMoreButton/ShowMoreButton";

function CommentsBlock() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const reviewItems = useSelector((state) => state.reviews.reviews.items);
  const { id } = useParams();
  const isReviewItemsLoading = reviewItems.status === "loading";

  const [activeWriteComment, setWriteCommentActive] = useState(false);

  React.useEffect(() => {
    dispatch(fetchReviews());
    dispatch(fetchFullReview({ _id: id }));
  }, [dispatch, id]);

  return (
    <>
      {isReviewItemsLoading && (
        <div>
          <h2 class="text-center">Loading...</h2>
          <CardLoader key={Math.random()} />
        </div>
      )}
      <section class="dark">
        {reviewItems.map(
          (obj) =>
            obj._id === id && (
              <div class="container py-4">
                <article class="postcard dark blue d-flex flex-column px-3 pb-5">
                  {obj.comments.length === 0 && (
                    <div class="postcard__text pl-0">
                      <h2 class="postcard__title">Comments</h2>
                      <div class="postcard__bar"></div>
                      <div class="postcard__preview-txt my-3">No comments</div>
                    </div>
                  )}
                  {obj.comments.length !== 0 && (
                    <div class="postcard__text pl-0">
                      <h2 class="postcard__title">Comments</h2>
                      <div class="postcard__bar"></div>
                    </div>
                  )}

                  {obj.comments.map((comment) => (
                    <CommentUnit key={comment._id} comment={comment} />
                  ))}
                </article>
              </div>
            )
        )}
      </section>
      <div>
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
