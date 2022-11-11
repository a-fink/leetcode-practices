// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Input: root = [1,null,2]
// Output: 2

// testing revealed:
// - a tree with no nodes should have depth of 0
// - problem is counting depth by #nodes not by traditional height based on edges, so 1 node should have depth of 1

// Constraints:
//     The number of nodes in the tree is in the range [0, 104].
//     -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 var maxDepth = function(root) {
    // if root is null there is no depth return 0
    if(root === null) return 0;

    // make variable to track longest path - problem is counting # nodes not # edges, so start at 1 b/c we know root exists
    let longest = 1;

    // make a stack (array with push/pop) and put the path to the root in the stack
    let stack = [];
    stack.push([root]);

    // while stack not empty
    while(stack.length !== 0){
        // pop path off stack & look at last node in stack (don't pop)
        const path = stack.pop();
        const current = path[path.length - 1];

        // put each child on end of path
        // if length of path longer than current longest update it
        // put path on stack
        if(current.left){
            const leftPath = path.concat(current.left);
            if(leftPath.length > longest){
                longest = leftPath.length;
            }
            stack.push(leftPath);
        }

        if(current.right){
            const rightPath = path.concat(current.right);
            if(rightPath.length > longest){
                longest = rightPath.length;
            }
            stack.push(rightPath);
        }
    }

    // return longest at end
    return longest;
};

// time complexity - O(n^2) I think, have to check each node in the tree to find longest path, so O(n) steps and adding new node to path with concat takes O(n)
// space complexity - O(n) have to make a stack that stores paths based on number of nodes
