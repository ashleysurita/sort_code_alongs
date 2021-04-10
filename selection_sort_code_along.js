// code along from https://www.youtube.com/watch?v=g-PGLbMth_g

const selectionSort = (arr) => {
  let sorted = [...arr];
  // loop through the array
  for (i = 0; i < sorted.length - 1; i++) {
    let iMin = i;
    // compare value at i with all other values to find the next lowest number
    for (j = i + 1; j < sorted.length; j++) {
      // compare which is lowest, set the index to the lowest value item
      if (sorted[j] < sorted[iMin]) iMin = j;
    }
    // if the index of the lowest value is not the first value, swap values
    if (iMin !== j) {
      // swap values
      const a = sorted[i];
      const b = sorted[iMin];
      sorted[i] = b;
      sorted[iMin] = a;
    }
  }
  return sorted;
};
