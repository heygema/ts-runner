function transpose(input: number[][]) {
  let result: number[][] = [];
  let step = 0;
  let prevRow = Array.isArray(input[0]) && input[0].length;
  let prevColumn = input.length;

  for (let i = 0; i < prevRow; i++) {
    for (let j = 0; j < prevColumn; j++) {
      let currentItem = result[step] || [];
      result[step] = [...currentItem, input[j][i]];
    }
    step++;
  }

  return result;
}

export default (function() {
  let result1 = transpose([
    [1, 2, 3],
    [4, 5, 6]
  ]);
  let result2 = transpose([
    [1, 2],
    [3, 4],
    [5, 6]
  ]);

  return {
    result1,
    result2
  };
});
