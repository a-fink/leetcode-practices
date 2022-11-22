// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
//     Input: nums = [3,0,1]
//     Output: 2
//     Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
//     Input: nums = [0,1]
//     Output: 2
//     Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
//     Input: nums = [9,6,4,2,3,5,7,0,1]
//     Output: 8
//     Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:
//     n == nums.length
//     1 <= n <= 104
//     0 <= nums[i] <= n
//     All the numbers of nums are unique.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// O(n) time and space option - make a set with all nums 0 -> n, then run through nums deleting all matches, last thing in set at end is the missing number
// O(n) time O(1) space approach - use formula for sum of all numbers 0->n, then run through nums subtracting each thing we find, value of sum at end is missing number
var missingNumber = function(nums) {
    // we're including 0->n so an array with nothing missing would have length n+1, and array with one item missing (our input) will have length n
    // get length and find sum from 0 to that length -> sum of all numbers 0->n is (n*(n+1))/2
    let n = nums.length;
    let sum = (n * (n + 1))/2;

    // go through incoming nums array and subtract each element from the sum we found
    for(let i = 0; i < n; i++){
        sum -= nums[i];
    }

    // at end sum will have value of whatever was missing, return that
    return sum;
};

// from research after solving - could also do some bitwise operations with the values in nums vs the indices as you go through and find that way
