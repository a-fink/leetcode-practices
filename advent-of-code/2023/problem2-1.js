const fs = require('fs');

function getFileData(){
    try {
        const data = fs.readFileSync('./problem2-input.txt', 'utf-8').split('\n');
        return data;
    } catch(err){
        console.log(err);
    }
}

totalCubes = {
    red: 12, green: 13, blue: 14
}

function checkGame(str){
    const [game, counts] = str.split(": ");
    const gameNum = game.split(" ").pop();

    let possible = true;

    const sets = counts.split("; ");
    sets.forEach(set => {
        const cubeCounts = set.split(", ");

        cubeCounts.forEach(count => {
            const [num, color] = count.split(" ");

            if(num > totalCubes[color]){
                possible = false;
            }
        })
    })

    return {possible, gameNum}
}

function findPossibleGamesSum(){
    const data = getFileData();

    let sum = 0;

    for(let i = 0; i < data.length; i++){
        const currentString = data[i];
        if(!currentString) continue;

        const results = checkGame(currentString);
        if(results.possible){
            sum += parseInt(results.gameNum);
        }
    }

    return sum;
}

console.log(findPossibleGamesSum());
