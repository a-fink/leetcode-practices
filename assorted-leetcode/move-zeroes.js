// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
//     Input: nums = [0,1,0,3,12]
//     Output: [1,3,12,0,0]

// Example 2:
//     Input: nums = [0]
//     Output: [0]

// Constraints:
//     1 <= nums.length <= 104
//     -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

var moveZeroes = function(nums) {
    // built in javascript sort will modify the order of other numbers in the array not just move 0s to end, so need to do manually
    // thought built in would work, but based on the sorting type it's using under the hood it doesn't seem to be able to prevent alertations we don't want

    // instead - use 2 pointeres - one from normal for loop as we go through, and one to track place of first zero
    let firstZero = null;
    for(let i = 0; i < nums.length; i++){
        // if first zero isn't set yet, & current index has a zero, set first zero
        if(firstZero === null){
            if(nums[i] === 0) firstZero = i;
        }
        // otherwise if value is not zero - swap current value and value at first zero, then increment first zero
        // can just increment first zero pointer b/c either the next non-zero number will be next number and it will swap to where we index, or if next number is 0 once we move this one it will take the place of our first zero now anyway
        else if(nums[i] !== 0){
            [nums[i], nums[firstZero]] = [nums[firstZero], nums[i]];
            firstZero++;
        }
    }
};
