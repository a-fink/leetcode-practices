// Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i] = nums[j] and the absolute difference between
// i and j is less than or equal to k.

// Example
//     For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be
//     solution(nums, k) = true.
//     There are two 2s in nums, and the absolute difference between their positions is exactly 3.

//     For nums = [0, 1, 2, 3, 5, 2] and k = 2, the output should be
//     solution(nums, k) = false.
//     The absolute difference between the positions of the two 2s is 3, which is more than k.

// Input/Output
//     [execution time limit] 4 seconds (js)

//     [input] array.integer nums
//     Guaranteed constraints:
//     0 ≤ nums.length ≤ 55000,
//     -231 - 1 ≤ nums[i] ≤ 231 - 1.

//     [input] integer k
//     Guaranteed constraints:
//     0 ≤ k ≤ 35000.

//     [output] boolean

function solution(nums, k) {
    // if nums has length less than 2 we can't have any pairs so auto false
    // the difference between two adjacent in array will be 1, so if k is 0 we also can't find a pair
    if(nums.length < 2 || k === 0) return false;

    // go through nums and hash with number as key and indices as an array of values
    let hash = new Map();
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        // try to get array of indexes for this number
        let idxArray = hash.get(num);
        // if doesn't exist make an empty array
        if(!idxArray) idxArray = [];
        // add index to indexes array
        idxArray.push(i);
        // update hash
        hash.set(num, idxArray);
    }

    // go through hash & get arrays of values with length two or more;
    let arrays = [];
    for(const [key, value] of hash){
        if(value.length >= 2) arrays.push(value);
    }

    // go through these and check if any combination of indices in the array are less than or equal to k, if find return true
    let result;
    arrays.forEach(el => {
        for(let i = 0; i < el.length - 1; i++){
            for(let j = i+1; j < el.length; j++){
                if(Math.abs(el[j]-el[i]) <= k){
                    result = true;
                }
            }
        }
    });

    if(result) return true;
    return false;
}
