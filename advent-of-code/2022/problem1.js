const fs = require('fs');

function getFileData(){
    try {
        const data = fs.readFileSync('./problem1-input.txt', 'utf-8');
        return data;
    } catch(err){
        console.log(err);
    }
}

function findHighest(){
    const dataString = getFileData();
    const dataArray = dataString.split(/\s/);

    let currentSum = 0;
    const sumArray = [];

    for(let i = 0; i < dataArray.length; i++){
        const currCalories = dataArray[i];
        if(currCalories === ""){
            sumArray.push(currentSum);
            currentSum = 0;
        } else {
            currentSum += parseInt(currCalories);
        }
    }

    sumArray.sort((a, b) => b - a);

    return sumArray[0] + sumArray[1] + sumArray[2];
}

console.log(findHighest());
