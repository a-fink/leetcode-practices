// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
//     Input: root = [1,null,2,3]
//     Output: [3,2,1]

// Example 2:
//     Input: root = []
//     Output: []

// Example 3:
//     Input: root = [1]
//     Output: [1]

// Constraints:
//     The number of the nodes in the tree is in the range [0, 100].
//     -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    // do depth first traversal with stack to mimic recursion
    // if current node has children we need to put it back on stack again, and track we've seen it, so we can add to array in right place, then put existing children on stack, right then left
    // if current node has no children, or current node has already been seen, then it's ready to go in answer array
    const array = [];
    if(root === null) return array;
    const stack = [root];
    const visited = new Set();
    while(stack.length > 0){
        const curr = stack.pop();
        if(curr.left === null && curr.right === null) array.push(curr.val);
        else if(visited.has(curr)) array.push(curr.val);
        else{
            visited.add(curr);
            stack.push(curr);
            if(curr.right !== null) stack.push(curr.right);
            if(curr.left !== null) stack.push(curr.left)
        }
    }
    return array;
};

var postorderTraversalRecursive = function(root, array=[]){
    // recursive version first, then will try iterative
    // base case - if root is null we are done
    // traverse left
    // traverse right
    // put current node in array
    if(root === null) return [];
    postorderTraversal(root.left, array);
    postorderTraversal(root.right, array);
    array.push(root.val);
    return array;
}
