// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
//     Input: nums = [1,3,5,6], target = 5
//     Output: 2

// Example 2:
//     Input: nums = [1,3,5,6], target = 2
//     Output: 1

// Example 3:
//     Input: nums = [1,3,5,6], target = 7
//     Output: 4

// Constraints:

//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
//     nums contains distinct values sorted in ascending order.
//     -104 <= target <= 104
var searchInsert = function(nums, target) {
    // if need O(logn) time we need a divide and conquer search approach
    // easier to write/maintain recursively if we don't have space concerns for stack memory

    // will write recursive helper function
    // call recursive function with start at 0 and end at length - 1 and return the result we get back
    return binarySearch(nums, target, 0, nums.length - 1);

};

function binarySearch(nums, target, start, end){
    // base cases
    // constraints tell us nums will never be empty so don't need to check that case
    // if target is as start return start
    if(nums[start] === target) return start;
    // if target is at end return end
    if(nums[end] === target) return end;
    // if target is less than start return start
    if(target < nums[start]) return start;
    // if target is greater than end return end + 1
    if(target > nums[end]) return end + 1;
    // if start is adjacent to end and none of the above cases are true, then number needs to go between these, should go in place of end and all elements shift, return end
    if(start + 1 === end) return end;

    // recursive steps
    // calculate midpoint - start + end / 2 rounded down
    const mid = Math.floor((start + end)/2);
    // if target is at midpoint return midpoint
    if(nums[mid] === target) return mid;
    // if target is less than midpoint recursively search with midpoint as new end
    if(target < nums[mid]) return binarySearch(nums, target, start, mid);
    // if target is greater than midpoint recursively search with midpoint as new start
    if(target > nums[mid]) return binarySearch(nums, target, mid, end);
}
