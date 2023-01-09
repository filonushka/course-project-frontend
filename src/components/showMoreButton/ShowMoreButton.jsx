import React from "react";

function ShowMoreButton(active, setActive) {
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
