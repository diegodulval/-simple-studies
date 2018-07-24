//console.log(matrixElementsSum([[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]])); //9

console.log(matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]])); //9

function matrixElementsSum(matrix) {
  const hauntedRooms = [];
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        hauntedRooms.push(j);
      } else if (!hauntedRooms.includes(j)) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
