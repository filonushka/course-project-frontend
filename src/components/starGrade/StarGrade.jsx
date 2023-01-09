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
        <FilledStar />
      ))}
      {drawHalfFilledStar(avgGrade).map((el) => (
        <HalfFilledStar />
      ))}
      {avgGrade >= 4.3 || drawEmptyStar(avgGrade).map((el) => <EmptyStar />)}
    </div>
  );
}

export default StarGrade;
