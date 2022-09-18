// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.
// EXAMPLE
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

var pivotIndex = function(nums) {
    // iterate through the array
    // at each index find the sum of everything to the left and right
    // if those match return the current index (will automatically be leftmost / first one found)
    // if get to end and none match return -1
    for(let i = 0; i < nums.length; i++){
        if(findLeftSum(nums, i) === findRightSum(nums, i)) return i;
    }

    return -1;
};

//helper function to find left sum
function findLeftSum(array, index){
    // add all values in array from 0 to index-1 and return the result
    let sum = 0;
    for(let i = 0; i < index; i++){
        sum += array[i];
    }
    return sum;
}

// helper function to find right sum
function findRightSum(array, index){
    // add all values in array from index+1 to end and return result
    let sum = 0;
    for(let i = index+1; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
