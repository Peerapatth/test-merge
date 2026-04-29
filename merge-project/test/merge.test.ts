import { merge } from "../src/merge";

describe("merge()", () => {
  test("basic merge", () => {
    expect(merge([1,3,5], [6,4,2], [7,8,9]))
      .toEqual([1,2,3,4,5,6,7,8,9]);
  });

  test("empty arrays", () => {
    expect(merge([], [5,4,3], []))
      .toEqual([3,4,5]);
  });

  test("all empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test("duplicates", () => {
    expect(merge([1,2,2], [3,2,1], [2,3]))
      .toEqual([1,1,2,2,2,2,3,3]);
  });

  test("negative numbers", () => {
    expect(merge([-3,-1], [2,0,-2], [1,4]))
      .toEqual([-3,-2,-1,0,1,2,4]);
  });
});