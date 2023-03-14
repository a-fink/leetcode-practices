// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:
//     Input: root = [4,2,7,1,3,6,9]
//     Output: [4,7,2,9,6,3,1]

// Example 2:
//     Input: root = [2,1,3]
//     Output: [2,3,1]

// Example 3:
//     Input: root = []
//     Output: []

// Constraints:
//     The number of nodes in the tree is in the range [0, 100].
//     -100 <= Node.val <= 100

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // do postorder traversal - when get to 'do the thing' with current node, swap children
    // base case - if null return null (need this b/c if start with null we still need to return a value)
    // base case - if no children return self (need this b/c if start with 1 node tree need to return itself)

    if(root === null) return null;
    if(root.left === null && root.right === null) return root;

    invertTree(root.left);
    invertTree(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
};
