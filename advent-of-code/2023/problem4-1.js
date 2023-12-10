const fs = require("fs");

function getFileDataAsStringArray() {
  try {
    const data = fs.readFileSync("./problem4-input.txt", "utf-8").split("\n");
    // remove empty line at end of file
    data.pop();

    return data;
  } catch (err) {
    console.log(err);
  }
}

function sumAllWinningPoints() {
  let sum = 0;
  const data = getFileDataAsStringArray();

  data.forEach((line) => {
    const result = getSingleCardScore(line);
    sum += result;
  });

  return sum;
}

function getSingleCardScore(line) {
  const [winning, card] = line.split(" | ");
  const winningNumbers = new Set(
    winning
      .split(": ")
      .pop()
      .split(" ")
      .filter((el) => el !== "")
  );
  const cardNumbers = card.split(" ").filter((el) => el !== "");

  let points = 0;
  cardNumbers.forEach((num) => {
    if (winningNumbers.has(num)) {
      if (!points) points = 1;
      else points *= 2;
    }
  });

  return points;
}

console.log(sumAllWinningPoints());
