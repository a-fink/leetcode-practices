// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// incoming array always at least 2 elements
// can have + or - numbers
// [1, 2, 3, 4, 5] target 9 => [3,4]
// [1, 2, -1, 4, 9] target 8 => [2, 4]

// create a hashmap of what my current number's pair would be, and where my current number is
// {8: 0, 7: 1, 6: 2, 5: 3, }

function findMatchingNumbers(array, target){
    // make hashmap
    let hash = new Map();

    // go through array
    for(let i = 0; i < array.length; i++){
        const current = array[i];
        const match = target - current;
        // if current is in hashmap I am a pair, return value in hash & my index
        const indexOfPair = hash.get(current);
        if(indexOfPair !== undefined){
            return [indexOfPair, i];
        }
        // if current not in hashmap, calculate pair, set pair value & current index into map
        else{
            hash.set(match, i);
        }
    }
}

// i=4
// current = 5
// match = 4
// {8: 0, 7:1, 6:2, 5:3, } [3, 4]

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, -1, 4, 9];

console.log(findMatchingNumbers(array1, 9))
console.log(findMatchingNumbers(array2, 8))
console.log(findMatchingNumbers(array1, 4))
console.log(findMatchingNumbers(array2, 1))
