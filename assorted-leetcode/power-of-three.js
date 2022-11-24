// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:
//     Input: n = 27
//     Output: true
//     Explanation: 27 = 33

// Example 2:
//     Input: n = 0
//     Output: false
//     Explanation: There is no x where 3x = 0.

// Example 3:
//     Input: n = -1
//     Output: false
//     Explanation: There is no x where 3x = (-1).

// Constraints:
//     -231 <= n <= 231 - 1

var isPowerOfThree = function(n) {
    // there is no integer power that will make it become 0 or negative, so if n is <= 0 return false
    if(n <= 0) return false;
    // otherwise, run through powers of 3 until we either find n or go past it
    // start power at the value of 3^0, then multiply by 3 each iteration (save steps vs using Math.pow each time)
    let power = 1;
    while(power <= n){
        if(power === n) return true;
        power *= 3;
    }

    // if get past the while loop and none was found it's not a power of 3, return false
    return false;
};
