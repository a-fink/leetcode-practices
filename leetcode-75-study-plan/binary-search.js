// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
//     Input: nums = [-1,0,3,5,9,12], target = 9
//     Output: 4
//     Explanation: 9 exists in nums and its index is 4

// Example 2:
//     Input: nums = [-1,0,3,5,9,12], target = 2
//     Output: -1
//     Explanation: 2 does not exist in nums so return -1

// Constraints:
//     1 <= nums.length <= 104
//     -104 < nums[i], target < 104
//     All the integers in nums are unique.
//     nums is sorted in ascending order.

var search = function(nums, target) {
    // set start at 0, end at length -1
    let start = 0;
    let end = nums.length - 1;
    let mid, midValue;

    // while start & end have not crossed
    // NOTE - NEED THE +1 / -1 BELOW, BOTH FOR NOT CHECKING SOMETHING WE ALREADY CHECKED AND TO MAKE SURE WE DON'T ENDLESS LOOP
    // WITHOUT THOSE THE MATH.FLOOR() TO GET A WHOLE NUMBER FOR MID MAKES IT SO START CAN NEVER MATCH/EXCEED END
    while(start <= end){
        // calculate mid and find value at mid
        mid = Math.floor((start + end) / 2);
        midValue = nums[mid];

        // if target is equal to value at mid we found it, return mid
        if(target === midValue) return mid;
        // if target is less than value at mid, we need to search smaller half, set end to mid - 1 (b/c we already know not at mid)
        if(target < midValue) end = mid - 1;
        // if target is more than value at mid, we need to search larger half, set start to mid + 1 (b/c we already know not at mid)
        else start = mid + 1;
    }

    // if make it out of while loop without returning an index, target is not there, return -1
    return -1;
};
