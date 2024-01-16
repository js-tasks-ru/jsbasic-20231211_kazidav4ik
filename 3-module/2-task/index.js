function filterRange(arr, a, b) {
  // ваш код...
  let filter = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filter.push(arr[i]);
    }
  }
  return filter;
}
