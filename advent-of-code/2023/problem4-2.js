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

function findTotalCards() {
  const data = getFileDataAsStringArray();

  const winsForEachOriginalCard = countAllCardWins(data);
  const cardCounts = new Array(data.length).fill(1);

  // go through wins and tally how many extra cards
  for (const [cardNumber, wins] of winsForEachOriginalCard.entries()) {
    const copies = cardCounts[cardNumber];

    for (let i = 1; i <= wins; i++) {
      const nextCard = cardNumber + i;
      const currCount = cardCounts[nextCard];
      cardCounts[nextCard] = currCount + copies;
    }
  }

  // add starting cards and extra cards and return
  let totalCopies = 0;
  cardCounts.forEach((count) => (totalCopies += count));

  return totalCopies;
}

function countAllCardWins(data) {
  const hash = new Map();
  data.forEach((line, i) => {
    const wins = countOneCardWins(line);
    hash.set(i, wins);
  });

  return hash;
}

function countOneCardWins(line) {
  const [winning, card] = line.split(" | ");
  const winningNumbers = new Set(
    winning
      .split(": ")
      .pop()
      .split(" ")
      .filter((el) => el !== "")
  );
  const cardNumbers = card.split(" ").filter((el) => el !== "");

  let matches = 0;
  cardNumbers.forEach((num) => {
    if (winningNumbers.has(num)) matches++;
  });

  return matches;
}

console.log(findTotalCards());
