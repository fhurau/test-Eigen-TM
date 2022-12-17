function findDifference(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      firstDiagonal += matrix[i][i];
      secondDiagonal += matrix[i][matrix.length - 1 - i];
    }
    return firstDiagonal - secondDiagonal;
  }
  
  let matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
  console.log(findDifference(matrix));
  