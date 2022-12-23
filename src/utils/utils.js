export const getCountGrade = function (arr) {
  const totalGrade = arr.reduce((acc, element) => acc + element.grade, 0);
  const averageGrade = totalGrade / arr.length;
  return averageGrade;
};

export const toggleBtn = (setIsOpen) => setIsOpen((isOpen) => !isOpen);
