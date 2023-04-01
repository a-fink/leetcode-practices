// Given the root of a binary tree, return the sum of all left leaves.
// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

// Example 1:
//     Input: root = [3,9,20,null,null,15,7]
//     Output: 24
//     Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

// Example 2:
//     Input: root = [1]
//     Output: 0

// Constraints:
//     The number of nodes in the tree is in the range [1, 1000].
//     -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var sumOfLeftLeaves = function(root) {
    // depth first or breadth first search will work, so do depth for performance
    // put on stack as [node, whether it was a left], when checking each node if it's a left & a leaf add it
    let sum = 0;
    const stack = [[root, false]];

    while(stack.length > 0){
        const [node, isLeft] = stack.pop();

        if(node.left === null && node.right === null && isLeft) sum += node.val;

        else{
            if(node.left !== null) stack.push([node.left, true]);
            if(node.right !== null) stack.push([node.right, false]);
        }
    }

    return sum;
};
