// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function createMatrix(n) {
  const matrix = [];
  for (let x = 0; x < n; x++) {
    const row = [];
    for (let y = 0; y < n; y++) {
      row.push(0);
    }
    matrix.push(row);
  }

  return matrix;
}

function checkZero(matrix) {
  for (let arr of matrix) {
    if (arr.includes(0)) {
      return true;
    }
  }
  return false;
}

function matrix(n) {
  const myMatrix = createMatrix(n);
  let counter = 1;
  let isColumn = true;
  let isForward = true;
  // ROW
  let rowMinBound = 0;
  let rowMaxBound = n - 1;
  let row = 0;
  // COLUMN
  let colMinBound = 0;
  let colMaxBound = n - 1;
  let col = 0;

  while (checkZero(myMatrix)) {
    switch (isColumn) {
      case true:
        if (isForward && col < colMaxBound) {
          myMatrix[row][col] = counter;
          counter++;
          col++;
        } else if (isForward && col === colMaxBound) {
          myMatrix[row][col] = counter;
          counter++;
          row++;
          rowMinBound++;
          isColumn = !isColumn;
        } else if (!isForward && col > colMinBound) {
          myMatrix[row][col] = counter;
          counter++;
          col--;
        } else if (!isForward && col == colMinBound) {
          myMatrix[row][col] = counter;
          counter++;
          row--;
          isColumn = !isColumn;
          rowMaxBound--;
        }
        break;
      case false:
        if (isForward && row < rowMaxBound) {
          myMatrix[row][col] = counter;
          counter++;
          row++;
        } else if (isForward && row === rowMaxBound) {
          myMatrix[row][col] = counter;
          counter++;
          isColumn = !isColumn;
          isForward = !isForward;
          col--;
          colMaxBound--;
        } else if (!isForward && row > rowMinBound) {
          myMatrix[row][col] = counter;
          counter++;
          row--;
        } else if (!isForward && row === rowMinBound) {
          myMatrix[row][col] = counter;
          counter++;
          col++;
          isColumn = !isColumn;
          isForward = !isForward;
          colMinBound++;
        }
        break;
      default:
        break;
    }
  }

  return myMatrix;
}

module.exports = matrix;
