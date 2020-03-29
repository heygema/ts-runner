import { transpose } from "../transpose";

describe("Matrix Transpose Test", () => {
  test("[[1,2,3], [4,5,6]] => [[1,4], [2,5], [3, 6]]", () => {
    expect(
      transpose([
        [1, 2, 3],
        [4, 5, 6]
      ])
    ).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });
});
