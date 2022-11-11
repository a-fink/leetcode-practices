// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
//     Input: nums = [2,2,1]
//     Output: 1

// Example 2:
//     Input: nums = [4,1,2,1,2]
//     Output: 4

// Example 3:
//     Input: nums = [1]
//     Output: 1

// Constraints:
//     1 <= nums.length <= 3 * 104
//     -3 * 104 <= nums[i] <= 3 * 104
//     Each element in the array appears twice except for one element which appears only once.

// if O(1) space constraint wasn't here would use a hash, but try with multiple pointers instead
// originally tried doing only left & mid pointers can give false positives or not find one at end
// then tried doing left/mid/right to check both forward and back, but that was such a high O(n) that it timed out
// in the end thought to sort the array - javascripts built in sort generally runs in O(n logn),
// after that need to traverse once O(n) and just check if either side of current is a match, if neither is we found the single
var singleNumber = function(nums) {
    // sort the array
    nums.sort((a, b) => {
        if(a < b) return -1;
        if(a === b) return 0;
        if(a > b) return 1;
    });

    // now only need to go through and look at whether i matches i+1 or i-1
    let i = 0;
    while(i < nums.length){
        if(nums[i-1] !== undefined && nums[i-1] === nums[i]) i++;
        else if(nums[i+1] !== undefined && nums[i+1] === nums[i]) i++;
        else return nums[i];
    }
};

// my solution is O(n logn) time and O(1) space but was accepted
// true O(n) solution is to reduce the array using the bitwise xor, so each pair cancels eachother out and only the bits for the signle number remain
