// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
//     For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:
    // Input: x = 4
    // Output: 2
    // Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
    // Input: x = 8
    // Output: 2
    // Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// Constraints:
//     0 <= x <= 231 - 1

var mySqrt = function(x) {
    // constraints say number will always be 0 or positive, so don't need to handle negatives

    // go through numbers 0->x and calculate current squared and next squared (need <= so still go in loop when x is 0)
    for(let i = 0; i <= x; i++){
        let curr = i*i;
        let next = (i+1)*(i+1);
        // if x = current squared return current index
        if(x === curr) return i;
        // if x = next squared return next index
        if(x === next) return i + 1;
        // if x is between current squared and next squared then its square root is between current and next - want rounded down so return current
        if(curr < x && x < next) return i;
    }
};

// this solution is O(n)
// research after submitting - can do divide & conquer / essentially binary search to get down to O(logn)
// see notes from 11-14-2022 for details
