const testBatchOne = (fnInTest) => {
  test("sorts [] -> []", () => {
    expect(fnInTest([])).toStrictEqual([]);
  });

  test("sorts [1] -> [1]", () => {
    expect(fnInTest([1])).toStrictEqual([1]);
  });

  test("sorts [3, 2] -> [2,3]", () => {
    expect(fnInTest([3, 2])).toStrictEqual([2, 3]);
  });

  test("sorts [2, 2, 2, 2, 2] -> [2, 2, 2, 2, 2]", () => {
    expect(fnInTest([2, 2, 2, 2, 2])).toStrictEqual([2, 2, 2, 2, 2]);
  });

  test("sorts [4, 5, 2, 1, 3] -> [1, 2, 3, 4, 5]", () => {
    expect(fnInTest([4, 5, 2, 1, 3])).toStrictEqual([1, 2, 3, 4, 5]);
  });
};

module.exports = testBatchOne;
