import React from "react";
import { useState } from "react";

function ShowMoreButton(active, setActive) {
  // const [isShowMoreBtnOpen, setIsShowMoreBtnOpen] = useState(false);
  const toggleShowMoreBtn = () => setActive((active) => !active);

  return (
    <>
      {!active ? (
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => toggleShowMoreBtn()}
        >
          Show more
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => toggleShowMoreBtn()}
        >
          Show less
        </button>
      )}
    </>
  );
}

export default ShowMoreButton;
