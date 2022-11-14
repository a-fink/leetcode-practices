// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements
// denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
//     Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//     Output: [1,2,2,3,5,6]
//     Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//     The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
//     Input: nums1 = [1], m = 1, nums2 = [], n = 0
//     Output: [1]
//     Explanation: The arrays we are merging are [1] and [].
//     The result of the merge is [1].

// Example 3:
//     Input: nums1 = [0], m = 0, nums2 = [1], n = 1
//     Output: [1]
//     Explanation: The arrays we are merging are [] and [1].
//     The result of the merge is [1].
//     Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Constraints:
//     nums1.length == m + n
//     nums2.length == n
//     0 <= m, n <= 200
//     1 <= m + n <= 200
//     -109 <= nums1[i], nums2[j] <= 109

var merge = function(nums1, m, nums2, n) {
    // if both m & n are 0 return to stop the function (will look at mutated nums1)
    if(m === 0 && n === 0) return;

    // if n is 0 return to stop the function (will look at nums1 and already has everything we need)
    if(n === 0) return;

    // no check for m=0 because if nums1 is empty we still want the below to run and copy all nums2 values into nums1
    // answer is looking at nums1 and wants it mutated, no return value

    // set index for the last number in each incoming array (m-1/n-1)
    let i = m - 1;
    let j = n - 1;

    // go through nums1 in reverse order from end -> 0 (end = m + n - 1)
    for(let end = m + n - 1; end >= 0; end--){
        // take the larger from each incomming array and put it at end, then decrement end & the array we pulled from
        let num1 = nums1[i];
        let num2 = nums2[j];
        // if num2 doesn't exist, or if both exist & num1 is bigger, put num1 at end
        if(num2 === undefined || num1 > num2){
            nums1[end] = num1;
            i--;
        }
        // otherwise put num2 at end
        else{
            nums1[end] = num2;
            j--;
        }
    }
};
