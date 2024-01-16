function getMinMax(str) {
  // ваш код...
  let input = str
    .split(" ")
    .filter((item) => {
      return isFinite(item);
    })
    .map((item) => {
      return Number(item);
    })
    .sort((a, b) => a - b);
  let resultat = {
    min: input[0],
    max: input[input.length - 1],
  };
  return resultat;
}
