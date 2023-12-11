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

  const cycleSteps = [];

  locations.forEach((location) => {
    const { stepsToFirstZ, stepsToZAgain } = getStepsForOneCycle(
      location,
      instructions,
      hash
    );
    cycleSteps.push([stepsToFirstZ, stepsToZAgain]);
  });

  console.log(cycleSteps);

  const steps = [];
  cycleSteps.forEach((stepPair) => {
    steps.push(stepPair[0]);
  });

  const lcm = steps.reduce(findLCM);

  //   let lcm = cycleSteps.pop()[0];
  //   console.log("starting lcm", lcm);
  //   for (let i = 0; i < cycleSteps.length; i++) {
  //     const nextNum = cycleSteps[i][0];
  //     lcm = findLCM(lcm, nextNum);
  //     console.log("nextNum", nextNum);
  //     console.log("new lcm", lcm);
  //   }

  return lcm;
}

function findLCM(num1, num2) {
  console.log("in lcm nums are", num1, num2);
  const gcd = findGCD(num1, num2);
  console.log("gcd is", gcd);
  return (num1 * num2) / gcd;
}

function findGCD(num1, num2) {
  return !num2 ? num1 : findGCD(num2, num1 % num2);
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
