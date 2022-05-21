const selectionSort = require('./selection-sort');
const testCases = require("../common-test/common-test-one");

testCases(selectionSort);

// test('sorts [] -> []', () => {
//   expect(selectionSort([])).toStrictEqual([]);
// });

// test('sorts [1] -> [1]', () => {
//   expect(selectionSort([1])).toStrictEqual([1]);
// });

// test('sorts [3, 2] -> [2,3]', () => {
//   expect(selectionSort([3, 2])).toStrictEqual([2, 3]);
// });

// test('sorts [2, 2, 2, 2, 2] -> [2, 2, 2, 2, 2]', () => {
//   expect(selectionSort([2, 2, 2, 2, 2])).toStrictEqual([2, 2, 2, 2, 2]);
// });

// test('sorts [4, 5, 2, 1, 3] -> [1, 2, 3, 4, 5]', () => {
//   expect(selectionSort([4, 5, 2, 1, 3])).toStrictEqual([1, 2, 3, 4, 5]);
// });
