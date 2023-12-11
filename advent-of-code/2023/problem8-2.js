const fs = require("fs");
const { loadavg } = require("os");

function getFileDataAndInstructions() {
  try {
    const data = fs.readFileSync("./problem8-input.txt", "utf-8").split("\n");

    const hash = new Map();
    const locations = [];
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
          if (key[2] === "A") {
            locations.push(key);
          }
        }
      }
    });

    return { instructions, hash, locations };
  } catch (err) {
    console.log(err);
  }
}

function countDirections() {
  const { instructions, hash, locations } = getFileDataAndInstructions();
  //   console.log(instructions);
  //   console.log(hash);
  //   console.log(locations);
  const cycleSteps = [];

  locations.forEach((location) => {
    const { stepsToFirstZ, stepsToZAgain } = getStepsForOneCycle(
      location,
      instructions,
      hash
    );
    cycleSteps.push([stepsToFirstZ, stepsToZAgain]);
  });

  return cycleSteps;
}

function getStepsForOneCycle(start, instructions, hash) {
  let stepsToFirstZ = 0;
  let stepsToZAgain = 0;
  let firstZ = null;
  let currSteps = 0;
  let currLocation = start;

  while (true) {
    while (currSteps === 0 || currLocation[2] !== "Z") {
      currSteps++;
      const direction = instructions[currSteps % instructions.length];
      currLocation = hash.get(`${currLocation}-${direction}`);
    }

    if (!firstZ) {
      firstZ = currLocation;
      stepsToFirstZ = currSteps;
      currSteps = 0;
    } else if (currLocation === firstZ) {
      stepsToZAgain = currSteps;
      break;
    }
  }

  return { stepsToFirstZ, stepsToZAgain };
}

console.log(countDirections());
