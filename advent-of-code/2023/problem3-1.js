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
const symbols = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "{",
  "]",
  "}",
  "|",
  "'",
  ";",
  ":",
  ",",
  "<",
  ">",
  "/",
  "?",
];

function sumOfValidParts() {
  let sum = 0;
  const data2d = getFileDataAsStringArray();
  const visitedNumbers = new Set();

  for (let row = 0; row < data2d.length; row++) {
    for (let col = 0; col < data2d[0].length; col++) {
      let char = data2d[row][col];
      if (nums.includes(char) && !visitedNumbers.has(`${row}-${col}`)) {
        const result = findNumAndCheckValid(row, col, data2d, visitedNumbers);
        sum += result;
      }
    }
  }

  return sum;
}

function findNumAndCheckValid(row, startCol, data2d, visitedNumbers) {
  let isValidNum = false;
  let numString = "";
  //   visitedNumbers.add(`${row}-${startCol}`);

  for (let i = startCol; i < data2d[row].length; i++) {
    char = data2d[row][i];
    if (nums.includes(char)) {
      // still part of the number, add to number string, add to visited set
      numString += char;
      visitedNumbers.add(`${row}-${i}`);
      // if validity not already confirmed check this new digit for adjacent symbols
      if (!isValidNum) {
        isValidNum = isAdjacentSymbol(row, i, data2d);
      }
    } else {
      // number is finished, break out
      break;
    }
  }

  return isValidNum ? parseInt(numString) : 0;
}

function isAdjacentSymbol(row, col, data2d) {
  const up = row - 1 >= 0 ? data2d[row - 1][col] : undefined;
  const upRight =
    row - 1 >= 0 && col + 1 < data2d[0].length
      ? data2d[row - 1][col + 1]
      : undefined;
  const right = col + 1 < data2d[0].length ? data2d[row][col + 1] : undefined;
  const downRight =
    row + 1 < data2d.length && col + 1 < data2d[0].length
      ? data2d[row + 1][col + 1]
      : undefined;
  const down = row + 1 < data2d.length ? data2d[row + 1][col] : undefined;
  const downLeft =
    row + 1 < data2d.length && col - 1 >= 0
      ? data2d[row + 1][col - 1]
      : undefined;
  const left = col - 1 >= 0 ? data2d[row][col - 1] : undefined;
  const upLeft =
    row - 1 >= 0 && col - 1 >= 0 ? data2d[row - 1][col - 1] : undefined;

  if (
    symbols.includes(up) ||
    symbols.includes(upRight) ||
    symbols.includes(right) ||
    symbols.includes(downRight) ||
    symbols.includes(down) ||
    symbols.includes(downLeft) ||
    symbols.includes(left) ||
    symbols.includes(upLeft)
  ) {
    return true;
  }
  return false;
}

console.log(sumOfValidParts());
