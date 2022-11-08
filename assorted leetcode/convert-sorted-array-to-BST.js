// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Example 1:
//     Input: nums = [-10,-3,0,5,9]
//     Output: [0,-3,9,-10,null,5]
//     Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
//     Input: nums = [1,3]
//     Output: [3,1]
//     Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Constraints:
//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
//     nums is sorted in a strictly increasing order.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// binary tree needs left child smaller and right child larger than each parent node
// we know the array is sorted so we can use that to help make it balanced - if we start with the midpoint and each time
// we go to add children we use the midpoint of what is left
// to deal with even # elements, round down so use the left of the pair
// when adding to binary tree send equal to elements to the right
// works almost like a quicksort if you picked midpoint as the pivot each time - recursion would be useful here
var sortedArrayToBST = function(nums) {
    // base cases
    // if input array is empty, return null
    if(nums.length === 0) return null;

    // if input array is undefined (tried to access past array length on last step) return null
    if(nums === undefined) return null;

    // if input array only has 1 thing, make a node with it and return it
    if(nums.length === 1) return new TreeNode(nums[0]);

    // the midpoint/slicing with 2 items in the array was causing weird behavior, make another base case for length 2 to clean up
    // if input array has 2 things, make a node with the smaller (left) and give it a right child of the larger (right)
    if(nums.length === 2){
        const root = new TreeNode(nums[0]);
        root.right = new TreeNode(nums[1]);
        return root;
    }

    // recursive steps - will only trigger for array of length 3 or more
    // find midpoint of input array (rounded down)
    const midIdx = Math.floor((0 + nums.length-1)/2);

    // make a node with that value
    const root = new TreeNode(nums[midIdx]);

    // nodes left is the result of recursively adding nodes from nums between 0 < midpoint
    root.left = sortedArrayToBST(nums.slice(0, midIdx));

    // node's right is the result of recursively adding nodes from nums between midpoint + 1 < length
    root.right = sortedArrayToBST(nums.slice(midIdx + 1, nums.length));

    // return the root node
    return root;
};

// time complexity - O(logn) - diving in half each time so should take logn steps to build tree
// space complexity - O(n logn) - making tree node for every element of array & logn calls on the call stack
// possible optimizations?
    // slower/more memory than many on leetcode
    // maybe find a way to do with multiple pointers iteratively to remove need for call stack memory?
    // could we find a way to make a que/stack to get the nodes in order then build them? Or maybe mathmatically index them like we do in a heap? (not sure this would speed up since still need to traverse array)
