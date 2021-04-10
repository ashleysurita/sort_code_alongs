// code along from https://www.youtube.com/watch?v=JU767SDMDvA

const insertSort = (arr) => {
  // make a copy of array so it's mutable
  const sorted = [...arr];
  // loop through the array starting with the 2nd item so we can compare it to a earlier item
  for (i = 1; i <= arr.length - 1; i++) {
    let j = i;
    while (j < 0 && arr[j - 1] > arr[j]) {
      // swap values
      const num1 = arr[j];
      const num2 = arr[j - 1];
      sorted[j - 1] = num1;
      sorted[j - 2] = num2;
      j = j - 1;
      // recursive part
      insertSort(sorted);
    }
  }
  return sorted;
};

// time complexity: O(n^2)
