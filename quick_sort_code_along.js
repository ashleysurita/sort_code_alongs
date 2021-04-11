// code along from https://www.youtube.com/watch?v=Hoixgm4-P4M

const quickSort = (arr, low, high) => {
  if (low < high) {
    const pivot = partition(arr, low, high);
    quickSort(arr, low, pivot);
    quickSort(arr, pivot + 1, high);
  }
};

const partition = (arr, low, high) => {
  const pivot = arr[low];
  const leftWall = low;

  for (i = low + 1; i <= high; i++) {
    let a;
    let b;
    if (arr[i] < pivot) {
      a = arr[i];
      b = arr[leftWall];
      arr[i] = b;
      arr[leftWall] = a;
    } else {
      a = pivot;
      b = arr[leftWall];
      arr[low] = b;
      arr[leftWall] = a;
    }
  }
  return leftWall;
};

// time complexity: O(n^2)
// average time complexity: O(nlogn)
