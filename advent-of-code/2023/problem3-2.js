const fs = require("fs");

function getFileDataAsStringArray() {
  try {
    const data = fs.readFileSync("./problem3-input.txt", "utf-8").split("\n");
    const data2d = [];
    data.forEach((line) => {
      data2d.push(line.split(""));
    });

    // remove empty line at end of file
    data2d.pop();

    return data2d;
  } catch (err) {
    console.log(err);
  }
}

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// go through 2d array
// when find a star, go looking for numbers around it
// if 2 numbers multiply & add to sum
function sumOfGearRatios() {
  let sum = 0;
  const data2d = getFileDataAsStringArray();
  const visitedNumbers = new Set();

  for (let row = 0; row < data2d.length; row++) {
    for (let col = 0; col < data2d[0].length; col++) {
      const char = data2d[row][col];
      if (char === "*") {
        const result = findValidGearRatios(row, col, data2d, visitedNumbers);
        sum += result;
      }
    }
  }

  return sum;
}

function findValidGearRatios(row, col, data2d, visitedNumbers) {
  const validNeighbors = getValidNeighbors(row, col, data2d);

  let firstNum = "";
  let secondNum = "";

  validNeighbors.forEach((neighbor) => {
    const [row, col] = neighbor;

    if (
      nums.includes(data2d[row][col]) &&
      !visitedNumbers.has(`${row}-${col}`)
    ) {
      if (!firstNum) {
        firstNum = getNumber(row, col, data2d, visitedNumbers);
      } else if (!secondNum) {
        secondNum = getNumber(row, col, data2d, visitedNumbers);
      }
    }
  });

  if (firstNum && secondNum) {
    return parseInt(firstNum) * parseInt(secondNum);
  }

  return 0;
}

function getNumber(row, col, data2d, visitedNumbers) {
  let num = data2d[row][col];
  visitedNumbers.add(`${row}=${col}`);

  for (let i = col + 1; i < data2d[row].length; i++) {
    const char = data2d[row][i];
    if (nums.includes(char)) {
      num += char;
      visitedNumbers.add(`${row}-${i}`);
    } else {
      break;
    }
  }

  for (let j = col - 1; j >= 0; j--) {
    const char = data2d[row][j];
    if (nums.includes(char)) {
      num = char + num;
      visitedNumbers.add(`${row}-${j}`);
    } else {
      break;
    }
  }

  return num;
}

function getValidNeighbors(row, col, data2d) {
  const validNeighbors = [];

  // up, upRight, upLeft
  if (row - 1 >= 0) {
    validNeighbors.push([row - 1, col]);

    if (col + 1 < data2d[0].length) validNeighbors.push([row - 1, col + 1]);

    if (col - 1 >= 0) validNeighbors.push([row - 1, col - 1]);
  }

  // down, downRight, downLeft
  if (row + 1 < data2d.length) {
    validNeighbors.push([row + 1, col]);

    if (col + 1 < data2d[0].length) validNeighbors.push([row + 1, col + 1]);

    if (col - 1 >= 0) validNeighbors.push([row + 1, col - 1]);
  }

  // right, left
  if (col + 1 < data2d[0].length) validNeighbors.push([row, col + 1]);
  if (col - 1 >= 0) validNeighbors.push([row, col - 1]);

  return validNeighbors;
}

console.log(sumOfGearRatios());
