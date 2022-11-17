// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
//     Input: nums = [3,2,3]
//     Output: 3

// Example 2:
//     Input: nums = [2,2,1,1,1,2,2]
//     Output: 2

// Constraints:
//     n == nums.length
//     1 <= n <= 5 * 104
//     -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?
var majorityElement = function(nums) {
    // original thought is to hash counts and then run through the hash - should be able to get O(n) time, but will also need O(n) space
    // after some research the boyer-moore majority voting algorithm can be used to solve in O(n) time with O(1) space
    // start with votes = 0 and candidates = null, then traverse the array once
    let votes = 0;
    let candidate = null;
    for(let i = 0; i < nums.length; i++){
        // if votes has become 0 (or at start) we need to choose a new candidate to try - set candidate to value at current index & set votes to 1 (b/c candidate same as self)
        if(votes === 0){
            candidate = nums[i];
            votes = 1;
        }
        // otherwise we are going to keep a running tally of votes, add 1 if current element is the same as candidate, or subtract one if they are different
        else{
            if(nums[i] === candidate) votes++;
            else votes--;
        }
    }
    // at the end of this, candidate will be the thing that occurs the most times within the array
    // typically we would need to confirm this is a majority element (and not one that just happens a lot)
    // to do that we would traverse the array 1 more time, counting the number of things matching candidate and making sure count is > length/2 (adj loops so still O(n))
    // in this case we are told to assume majority element always exists, so the candidate we found that has the most will always be the majority
    // so here we can just return candidate
    return candidate;
};
