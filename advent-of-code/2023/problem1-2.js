const fs = require('fs');

function getFileData(){
    try {
        const data = fs.readFileSync('./problem1-input.txt', 'utf-8').split('\n');
        return data;
    } catch(err){
        console.log(err);
    }
}

const numberMap = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
}

function findFirstNumber(str){
    let firstIndex = Infinity;
    let number;

    for(const [string, num] of Object.entries(numberMap)){
        const index = str.indexOf(string);
        if(index !== -1 && index < firstIndex){
            firstIndex = index;
            number = num;
        }
    }

    return number;
}

function findLastNumber(str){
    let lastIndex = -1;
    let number;

    for(const [string, num] of Object.entries(numberMap)){
        const index = str.lastIndexOf(string);
        if(index > lastIndex){
            lastIndex = index;
            number = num;
        }
    }

    return number;
}


function findSum(){
    const data = getFileData();

    let sum = 0;

    for(let i = 0; i < data.length; i++){
        const currentString = data[i];
        if(!currentString) continue;

        const firstNumChar = findFirstNumber(currentString);
        const lastNumChar = findLastNumber(currentString);
        sum += parseInt(firstNumChar + lastNumChar);

        console.log(parseInt(firstNumChar + lastNumChar), sum);
    }

    return sum;
}

console.log(findSum());
