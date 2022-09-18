// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function(nums) {
    // start a running sum variable at 0 and a blank array to hold the answers
    // iterate through the nums array, at each position add value to running sum and store that in the answers array
    let sumArray = [];
    let runningSum = 0;

    for (let i = 0; i < nums.length; i++){
        runningSum += nums[i];
        sumArray.push(runningSum);
    }

    return sumArray;
};
