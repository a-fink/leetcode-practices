// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

// Example 1:
//     Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
//     Output: true
//     Explanation: The root-to-leaf path with the target sum is shown.

// Example 2:
//     Input: root = [1,2,3], targetSum = 5
//     Output: false
//     Explanation: There two root-to-leaf paths in the tree:
//     (1 --> 2): The sum is 3.
//     (1 --> 3): The sum is 4.
//     There is no root-to-leaf path with sum = 5.

// Example 3:
//     Input: root = [], targetSum = 0
//     Output: false
//     Explanation: Since the tree is empty, there are no root-to-leaf paths.

// Constraints:
//     The number of nodes in the tree is in the range [0, 5000].
//     -1000 <= Node.val <= 1000
//     -1000 <= targetSum <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // if root is null there is no tree and cannot be a root-leaf sum - false
    // if root is only 1 node then check if value is targetSum
    // otherwise could need to search whole tree so depth first with stack is more efficient
    // make a stack (array w/push & pop) and store paths in it
    // when checking each path, if the last node has no children (leaf) then check if sum matches, otherwise add paths with children & keep looking
    if(root === null) return false;
    if(root.left === null && root.right === null) return root.val === targetSum;

    const stack = [[root]];

    while(stack.length > 0){
        const path = stack.pop();
        const lastNode = path[path.length - 1];

        if(lastNode.left === null && lastNode.right === null){
            const pathSum = path.reduce((sum, node) => sum + node.val, 0);
            if(pathSum === targetSum) return true;
        }

        if(lastNode.left !== null) stack.push(path.concat(lastNode.left));
        if(lastNode.right !== null) stack.push(path.concat(lastNode.right));
    }

    // if make it through loop without finding answer, no matches
    return false;
};
