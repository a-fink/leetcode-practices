// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you
// may return the result in any order.

// Example 1:
//     Input: nums1 = [1,2,2,1], nums2 = [2,2]
//     Output: [2,2]

// Example 2:
//     Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//     Output: [4,9]
//     Explanation: [9,4] is also accepted.

// Constraints:
//     1 <= nums1.length, nums2.length <= 1000
//     0 <= nums1[i], nums2[i] <= 1000

// Follow up:
//     What if the given array is already sorted? How would you optimize your algorithm?
//     What if nums1's size is small compared to nums2's size? Which algorithm is better?
//     What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

var intersect = function(nums1, nums2) {
    // sort both arrays so if we are moving through them we can know the relationship of the values to each other and where we should look
    // REMEMBER THAT SORT DOES ALPHABETICAL SORTING BY DEFAULT, NEED CALLBACK TO MAKE IT SORT NUMBERICALLY!!!
    nums1.sort((a,b) => {
        return a-b;
    });

    nums2.sort((a,b) => {
        return a-b;
    });

    // set a pointer at the start of each array and make an answers array
    let ptr1 = ptr2 = 0;
    let answer = [];

    // traverse the array while both pointers are still valid indices in their respective arrays
    while(ptr1 < nums1.length && ptr2 < nums2.length){
        let val1 = nums1[ptr1];
        let val2 = nums2[ptr2];
        // if the values at each pointer match put that value in answer and increment both
        if(val1 === val2){
            answer.push(val1);
            ptr1++;
            ptr2++;
        }
        // otherwise, whichever one has the smaller value needs to increment so it can look for larger values to match the other
        // if nums1 has smaller value increment its pointer - these ifs should be exclusive, only want to do one each iteration just to be careful
        else if (val1 < val2) ptr1++;
        // if nums2 has smaller value increment its pointer
        else ptr2++;
    }
    // return the answer array
    return answer;
};
