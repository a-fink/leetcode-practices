const fs = require('fs');

function getFileData(){
    try {
        const data = fs.readFileSync('./problem1-input.txt', 'utf-8').split('\n');
        return data;
    } catch(err){
        console.log(err);
    }
}

function findFirstNumber(str){
    for(let i = 0; i < str.length; i++){
        const parsedVal = parseInt(str[i]);
        if(Number.isInteger(parsedVal)){
            return str[i];
        }
    }
}

function findLastNumber(str){
    for(let i = str.length - 1; i >= 0; i--){
        const parsedVal = parseInt(str[i]);
        if(Number.isInteger(parsedVal)){
            return str[i];
        }
    }
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
    }

    return sum;
}

console.log(findSum());
