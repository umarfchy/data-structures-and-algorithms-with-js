'use strict';
/**
 * [4, 2, 5, 3, 1]
 * [3, 2, 5, 4, 1]
 * [5, 2, 3, 4, 1]
 * ascending order - very end - max value
 * [4, 2, 5, 3, 1]
 * [4, 2, 1, 3, 5]
 * [3, 2, 1, 4, 5]
 * [1, 2, 3, 4, 5]
 */

const getMaxValueIdx = (arr) => {
  let maxValueIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[maxValueIdx] < arr[i]) maxValueIdx = i;
  }
  return maxValueIdx;
};

const swap = (arr, firstIdx, secondIdx) => {
  [arr[firstIdx], arr[secondIdx]] = [arr[secondIdx], arr[firstIdx]];
  return arr;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const currentLastIdx = arr.length - 1 - i;
    // index of the max element
    const maxValueIdx = getMaxValueIdx(arr.slice(0, currentLastIdx + 1));
    // swap
    swap(arr, maxValueIdx, currentLastIdx);
  }
  return arr;
};

module.exports = selectionSort;
