let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: "December",
  currency: "USD",
  isPayed: false,
};
function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let k in salaries) {
    if (
      typeof salaries[k] === "number" &&
      isNaN(salaries[k]) === false &&
      salaries[k] != Infinity &&
      salaries[k] != -Infinity
    ) {
      sum += salaries[k];
    } else continue;
  }
  return sum;
}
