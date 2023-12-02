const fs = require('fs');

function getFileData(){
    try {
        const data = fs.readFileSync('./problem2-input.txt', 'utf-8').split('\n');
        return data;
    } catch(err){
        console.log(err);
    }
}

function getGamePower(str){
    const [game, counts] = str.split(": ");
    const sets = counts.split("; ");

    let minNeeded = {
        red: 0, blue: 0, green: 0
    }

    sets.forEach(set => {
        const cubeCounts = set.split(", ");

        cubeCounts.forEach(count => {
            const [num, color] = count.split(" ");

            if(num > parseInt(minNeeded[color])){
                minNeeded[color] = num;
            }
        })
    })

    return minNeeded.red * minNeeded.blue * minNeeded.green;
}

function sumGamePowers(){
    const data = getFileData();

    let sum = 0;

    for(let i = 0; i < data.length; i++){
        const currentString = data[i];
        if(!currentString) continue;

        const gamePower = getGamePower(currentString);
        sum += gamePower;
    }

    return sum;
}

console.log(sumGamePowers());
