// code along from https://www.youtube.com/watch?v=jlHkDBEumP0
const mergeSort = (arr, lowerBound, upperBound) => {
  // if the array length is more then 1 element, split array in half
  if (lowerBound < upperBound) {
    const mid = (lowerBound + upperBound) / 2;
    // recursive part of the function, we call itself for both halves of the array
    mergeSort(arr, lowerBound, mid);
    mergeSort(arr, mid, upperBound);
    // when arrays are single elements, we can move to the next step and merge arrays next to each other
    merge(arr, lowerBound, mid, upperBound);
  }
};

const merge = (arr, lowerBound, mid, upperBound) => {
  const i = lowerBound; // index of the left array
  const j = mid + 1; // index of the right array
  const k = lowerBound; // index of the new array

  const sorted = [];
  while (i <= mid && j <= upperBound) {
    // if left number is lower, we add it to the sorted array
    if (arr[i] <= a[j]) {
      sorted[k] = a[i];
      i++;
    } else {
      // if right number is lower, we add it to the sorted array
      sorted[k] = a[j];
      j++;
    }
    k++;
  }
  // need to check if the index goes past the sub-list length
  if (i > mid) {
    // add the remaining elements of the other array if there are any left
    while (j <= upperBound) {
      b[k] = a[j];
      j++;
      k++;
    }
  } else {
    // add the remaining elements of the other array if there are any left
    while (i <= mid) {
      b[k] = a[i];
      i++;
      k++;
    }
  }

  // last, loop over original array, and set value at index to be the value from the sorted array
  for (let i = lowerBound; i <= upperBound; i++) {
    arr[i] = b[i];
  }
};

// time complexity is o(nlogn)
