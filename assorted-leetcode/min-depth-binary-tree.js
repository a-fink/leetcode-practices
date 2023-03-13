// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

// Example 1:
//     Input: root = [3,9,20,null,null,15,7]
//     Output: 2

// Example 2:
//     Input: root = [2,null,3,null,4,null,5,null,6]
//     Output: 5

// Constraints:
//     The number of nodes in the tree is in the range [0, 105].
//     -1000 <= Node.val <= 1000

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
 * @return {number}
 */
var minDepth = function(root) {
    // since we want to find at top of tree, breadth first will get us there soonest
    // if root is null then depth is 0
    // put node & level its at in queue (array w/push & shift) & do breadth first traversal
    // if both left & right of current node are null, this is our min depth, otherwise put children on queue and keep looking
    if(root === null) return 0;

    let queue = [[root, 1]];
    while(queue.length > 0){
        const [node, level] = queue.shift();
        if(node.left === null & node.right === null) return level;
        if(node.left !== null) queue.push([node.left, level + 1]);
        if(node.right !== null) queue.push([node.right, level + 1]);
    }
};
