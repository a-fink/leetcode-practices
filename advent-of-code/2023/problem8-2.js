const fs = require("fs");

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

  let currLocations = locations;
  console.log("starting locations", currLocations);
  console.log("instructions", instructions);
  let steps = 0;
  let allAtEnd = false;

  while (!allAtEnd) {
    const direction = instructions[steps % instructions.length];

    // console.log("old locations", currLocations);
    let newLocations = [];
    allAtEnd = true;
    currLocations.forEach((location, i) => {
      const newLocation = hash.get(`${location}-${direction}`);
      //   console.log("new location", newLocation);
      allAtEnd = allAtEnd && newLocation[2] === "Z";
      newLocations.push(newLocation);
    });
    currLocations = newLocations;
    console.log("new locations", currLocations);
    console.log("all at end", allAtEnd);
    steps++;

    // TODO - re-work this with LCM approach to stop endless looping
    if (steps === 200) break;
  }

  return steps;
}

console.log(countDirections());
