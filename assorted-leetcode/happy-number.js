// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

//     Starting with any positive integer, replace the number by the sum of the squares of its digits.
//     Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//     Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

// Example 1:
//     Input: n = 19
//     Output: true
//     Explanation:
//     1^2 + 9^2 = 82
//     8^2 + 2^2 = 68
//     6^2 + 8^2 = 100
//     1^2 + 0^2 + 0^2 = 1

// Example 2:
//     Input: n = 2
//     Output: false

// Constraints:
//     1 <= n <= 231 - 1

var isHappy = function(n) {
    // posibility of endless looping means we need some way to detect we've entered a loop and stop it
    // in this case, we could both detect loops, and speed things up if they appear again as we're going through by hashing our input/output at every step
    let hash = new Map();

    // this problem is a good candiate for recursion with memoization so call recrusive helper with our number & hash
    return isHappyHelper(n, hash);
};

// helper recursive function
// inputs - a number & a hash of previously calculated answers
// returns - boolean for whether number is happy
function isHappyHelper(n, hash){
    // base cases
    // if hash has an entry for this number and that entry = 1 then this is a happy number - return true
    if(hash.get(n) === 1) return true;
    // if hash has an entry for this number and that entry is not 1 then this is not a happy number - return false
    if(hash.get(n) !== undefined && hash.get(n) !== 1) return false;

    // recusrive steps
    // need to get the digits from the number and calculate their sum, then store that in the hash
    // use helpers to get digits & sum of squared digits
    let digits = getDigits(n);
    let sum = addSquares(digits);
    hash.set(n, sum);
    // recusrively call function with sum as n
    return isHappyHelper(sum, hash);
}

// helper to get array of digits from a number
// inputs - any number
// returns - an array of the numbers digits (will be in reverse order but since we are just adding them up it won't matter in this case)
function getDigits(num){
    let digits = [];

    // while number is greater than 0, divide num by 10 - remainder will go in our digits array
    // and what's left will update num (need to use Math.floor to round down to get rid of decimal on end of number after division)
    while(num > 0){
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    return digits;
}

// helper to take an array of digits and return the sum of its squares
// inputs - an array of numbers
// return - a number
function addSquares(digits){
    // iterate over all digits, square them, add them to sum & return sum
    let sum = 0;
    for(i = 0; i < digits.length; i++){
        sum += (digits[i] * digits[i]);
    }
    return sum;
}
