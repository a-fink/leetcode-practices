// Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
// You must not use any built-in library function, such as sqrt.

// Example 1:
//     Input: num = 16
//     Output: true
//     Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

// Example 2:
//     Input: num = 14
//     Output: false
//     Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

// Constraints:
//     1 <= num <= 231 - 1

var isPerfectSquare = function(num) {
    // 1 is a perfect square return true
    if(num === 1) return true;

    // past 1, if a number is a perfect square, it's perfect square components should happen below half of the number
    const halfNum = Math.floor(num/2);

    for(let i = 0; i <= halfNum; i++){
        if(i * i === num) return true;
    }

    return false;
};
