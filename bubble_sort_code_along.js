// code along from https://www.youtube.com/watch?v=xli_FI7CuzA

const bubbleSort = (arr) => {
  let sorted = [...arr];
  for (i = 1; i <= sorted.length; i++) {
    for (j = 0; j < sorted.length; j++) {
      if (sorted[j] > a[j + 1]) {
        const a = sorted[j];
        const b = sorted[j + 1];
        sorted[j] = b;
        sorted[j + 1] = a;
        bubbleSort(sorted);
      }
    }
  }
  return sorted;
};

// time complexity: O{n^2}
