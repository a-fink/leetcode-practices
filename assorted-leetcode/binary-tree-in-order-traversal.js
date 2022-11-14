// Given the root of a binary tree, return the inorder traversal of its nodes' values. (as an array)

// Example 1:
//     Input: root = [1,null,2,3]
//     Output: [1,3,2]

// Example 2:
//     Input: root = []
//     Output: []

// Example 3:
//     Input: root = [1]
//     Output: [1]

// Constraints:
//     The number of nodes in the tree is in the range [0, 100].
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

 var inorderTraversal = function(root) {
    // if root is null no tree to traverse, return []
    if(root === null) return [];

    // normal iterative stack DFS on binary tree mimics pre-order traversal, need to modify for in order traversal
    // since we're adding nodes before looking at current node, could wind up re-adding children endlessly, need to track visited
    // make array to hold answer and stack for traversal (array with push/pop) & set to hold visited
    // put root in stack & visited
    let answer = [];
    let visited = new Set();
    let stack = [root];
    visited.add(root);

    // while stack is not empty
    while(stack.length > 0){
        // peek at the last node on top of stack
        let peek = stack[stack.length - 1];

        // if it has a left, and we haven't already visited left, put left on stack & in visited
        if(peek.left && !visited.has(peek.left)){
            stack.push(peek.left);
            visited.add(peek.left);
        }

        // if doesn't have a left or we've already been there - pop the stack (don't need to save popped node, will be same as peek)
        // add value to answer array, add right child to stack & visited if exists
        else{
            stack.pop();
            answer.push(peek.val);
            if(peek.right){
                stack.push(peek.right);
                visited.add(peek.right);
            }
        }
    }
    // return answer array
    return answer;
};
