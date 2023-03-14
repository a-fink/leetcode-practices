// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
//     Input: nums = [1,2,3,1], k = 3
//     Output: true

// Example 2:
//     Input: nums = [1,0,1,1], k = 1
//     Output: true

// Example 3:
//     Input: nums = [1,2,3,1,2,3], k = 2
//     Output: false

// Constraints:
//     1 <= nums.length <= 105
//     -109 <= nums[i] <= 109
//     0 <= k <= 105

var containsNearbyDuplicate = function(nums, k) {
    // maybe trade some space for better time?
    // still can't have two distinct if only 1 thing in array or k=0
    // go through array
        // if num not in hash, put in num & index
        // if num in hash check if last index and this index satisfy <= k condition
            // if do return true
            // otherwise replace old index with current and keep looking
    if(nums.length < 2 || k === 0) return false;

    const hash = new Map();
    for(let i = 0; i < nums.length; i++){
        let lastIndex = hash.get(nums[i]);
        if(lastIndex === undefined) hash.set(nums[i], i);
        else{
            if(i - lastIndex <= k) return true;
            else hash.set(nums[i], i);
        }
    }

    return false;
};

// solution worked but runtime was super high - can we do better?
var containsNearbyDuplicateOriginal = function(nums, k) {
    // if array only has 1 thing in it, there are not two distinct indices -> false
    // if k is 0 we also can't have two distinct indices (would have to be same index to subtract to 0) -> false
    // have 2 pointers starting at 0 and 1 and traverse through array
        // if nums[i]=nums[j] return true
        // otherwise increase j
        // if j > i+k or j has gone past array we've run out of things to check, move i put j at i+1 & keep looking

    if(nums.length < 2 || k === 0) return false;

    let i = 0;
    let j = 1;
    while(i < nums.length){
        if(nums[i] === nums[j]) return true;
        j++;
        if(j > i + k || j >= nums.length){
            i++;
            j = i + 1;
        }
    }

    return false;
};
