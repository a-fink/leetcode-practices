// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// examples:
// [1,2,3] -> [1,2,4]
// [4,3,2,1] -> [4,3,2,2]
// [9] -> [10]

var plusOne = function(digits) {
    // go through the array in reverse starting from the last digit
    for(let i = digits.length - 1; i >= 0; i--){
        // if the digit at the current index is betwee 0 & 8 increase the digit and return the array
        if(digits[i] >= 0 && digits[i] <= 8){
            digits[i]++;
            return digits;
        }
        // if current digit is 9 and we're at the 0th index we need to make current index 0
        // and add a 1 to the start of the array, then return it
        else if(digits[i] === 9 && i === 0){
            digits[i] = 0;
            digits.unshift(1);
            return digits;
        }
        // if the last digit is 9 and we have more digits to check set it to 0 and then keep looking
        else{
            digits[i] = 0;
        }
    }
};
