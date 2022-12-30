export const getCountGrade = function (arr) {
  const totalGrade = arr.reduce((acc, element) => acc + element.grade, 0);
  const averageGrade = Math.round((totalGrade / arr.length) * 2) / 2;
  return averageGrade;
};

export const toggleBtn = (setIsOpen) => setIsOpen((isOpen) => !isOpen);

export const drawFilledStar = (grade) => {
  const number = Math.round(grade * 2) / 2;
  const integer = Math.trunc(number);
  const arrFilledStars = new Array(integer);
  arrFilledStars.fill(1);
  return arrFilledStars;
};

export const drawHalfFilledStar = (grade) => {
  const number = Math.round(grade * 2) / 2;
  const integer = Math.trunc(number);
  const decimalPart = number - integer;
  const arrHalfFilledStars = new Array(Math.ceil(decimalPart));
  arrHalfFilledStars.fill(0.5);
  return arrHalfFilledStars;
};

export const drawEmptyStar = (grade) => {
  const maxGrade = 5;
  const arrEmptyStars = new Array(maxGrade - Math.ceil(grade));
  arrEmptyStars.fill(0);
  return arrEmptyStars;
};

// String(component).repeat(integer);
