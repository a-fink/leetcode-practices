// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

// after testing - if given tree has no nodes, return [] for answer array

// Constraints:

//     The number of nodes in the tree is in the range [0, 104].
//     0 <= Node.val <= 104
//     The height of the n-ary tree is less than or equal to 1000.

// Follow up: Recursive solution is trivial, could you do it iteratively?
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

 var preorder = function(root) {
    // if root is null we can't traverse, return an empty array for the answer
    if(root === null) return [];

    // make a stack (array with push/pop) and put root node in it
    const stack = [];
    stack.push(root);

    // make an array to hold the answer
    const answerArray = [];

    // while stack is not empty
    while(stack.length !== 0){
        // pop top node off stack
        const curr = stack.pop();

        // add it's value to answer array
        answerArray.push(curr.val);

        // get its children
        const children = curr.children;

        // if children exist, for each child add it to the stack
        // want the left most child to end up at top of stack so add children in reverse order
        if(children){
            for(let i = children.length - 1; i >= 0; i--){
                stack.push(children[i]);
            }
        }
    }

    // return the answer array
    return answerArray;
};
