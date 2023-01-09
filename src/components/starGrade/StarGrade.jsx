import React from "react";
import FilledStar from "./FilledStar";
import HalfFilledStar from "./HalfFilledStar";
import EmptyStar from "./EmptyStar";
import {
  getCountGrade,
  drawEmptyStar,
  drawHalfFilledStar,
  drawFilledStar,
} from "../../utils/utils";

function StarGrade({ allGrades }) {
  const avgGrade = getCountGrade(allGrades);

  return (
    <div class="mb-3">
      {drawFilledStar(avgGrade).map((el) => (
        <FilledStar key={Math.random()} />
      ))}
      {drawHalfFilledStar(avgGrade).map((el) => (
        <HalfFilledStar key={Math.random()} />
      ))}
      {avgGrade >= 4.3 ||
        drawEmptyStar(avgGrade).map((el) => <EmptyStar key={Math.random()} />)}
    </div>
  );
}

export default StarGrade;
