/*
 * start from the begining of the array
 * increment the size of the array
 * sort the new sub-array
 * eventually the entire array will be sorted
 * [4, 3, 1, 5, 2]
 */

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const currentSlice = arr.slice(0, i + 1);
    for (let x = currentSlice.length - 1; x > 0; x--) {
      if (arr[x] > arr[x - 1]) break;
      [arr[x], arr[x - 1]] = [arr[x - 1], arr[x]];
    }
  }
  return arr;
};

// insertionSort([4, 3, 1, 5, 2]);

module.exports = insertionSort;
