const fs = require("fs");

function getFileDataAndInstructions() {
  try {
    const data = fs.readFileSync("./problem8-input.txt", "utf-8").split("\n");

    const hash = new Map();
    let instructions;
    data.forEach((line, i) => {
      if (line) {
        if (i === 0) {
          instructions = line;
        } else {
          const [key, directions] = line.split(" = ");
          const [lDir, rDir] = directions.split(", ");
          const left = lDir.slice(1);
          const right = rDir.slice(0, 3);
          hash.set(`${key}-L`, left);
          hash.set(`${key}-R`, right);
        }
      }
    });

    return { instructions, hash };
  } catch (err) {
    console.log(err);
  }
}

function countDirections() {
  const start = "AAA";
  const end = "ZZZ";
  const { instructions, hash } = getFileDataAndInstructions();

  let steps = 0;
  let currLocation = start;
  while (currLocation !== end) {
    const direction = instructions[steps % instructions.length];
    currLocation = hash.get(`${currLocation}-${direction}`);
    steps++;
  }

  return steps;
}

console.log(countDirections());
