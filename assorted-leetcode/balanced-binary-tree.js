// Given a binary tree, determine if it is height-balanced
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

// Example 1:
//     Input: root = [3,9,20,null,null,15,7]
//     Output: true

// Example 2:
//     Input: root = [1,2,2,3,3,null,null,4,4]
//     Output: false

// Example 3:
//     Input: root = []
//     Output: true

// Constraints:
//     The number of nodes in the tree is in the range [0, 5000].
//     -104 <= Node.val <= 104

var isBalanced = function(root) {
    // need to progress down the tree counting left and right and see if they are more than 1 apart at any given level
    // good candidate for recursion
    // need to have an empty tree return a true, so set up that case in a driver function, otherwise call recursive helper to do the rest
    if(root === null) return true;

    // recursive helper will count height of left and right subtrees, if abs(left-right) > 1 false, otherwise true
    let leftHeight = isBalancedHelper(root.left);
    let rightHeight = isBalancedHelper(root.right);

    // if either height gets back a -1 it means that subtree failed the check return false
    // if both have non-negative values compare heights to make sure full tree passes check, false if fails, true otherwise
    if(leftHeight === -1 || rightHeight === -1) return false
    if(Math.abs(leftHeight - rightHeight) > 1) return false;
    return true;
};

// recursive helper to calculate the height of a tree given some node root, or indicate if height imbalanced
    //height in this case is # nodes between root and lowest node below root
// inputs - the root node of a tree
// returns - height of the given tree if balanced, or -1 if it's a height unbalanced tree
function isBalancedHelper(root){
    // base case - if node is null return 0
    if(root === null) return 0;
    // pre recursion - none
    // recursive step - left count is this node(1) + count of all below, right count is this node(1) + count of all below
    let left = 1 + isBalancedHelper(root.left);
    let right = 1 + isBalancedHelper(root.right);

    // if left or right are 0 we found a failure lower down in the tree, return -1 (only way to get 0 is if they got a -1 from a lower level)
    if(left === 0 || right === 0) return -1;

    // if the heights of left & right are more than 1 apart we have a failure, return a -1
    if(Math.abs(left - right) > 1) return -1;

    // otherwise height at this level of subtree is the height of the longer subtree (left/right)
    return Math.max(left, right);
}
