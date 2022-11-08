
class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


var isSameTree = function(p, q) {
    // two trees are identical if they are structurally identical and have the same values at each node
    // if do same traversal on both trees and store to string, if the strings match at the end then the two trees match
    // build helper to do depth first traversal with stack and return a string
    let tree1Str = traversalHelper(p);
    let tree2Str = traversalHelper(q);
    if(tree1Str === tree2Str) return true;
    return false;
};

function traversalHelper(root){
    // if root is null tree is empty return null
    if(root === null) return null;

    // make a stack (array w/push/pop only) & put root in it, and make a string to hold values
    let stack = [];
    stack.push(root);
    let str = "";

    // while stack is not empty
    while(stack.length > 0){
        // get top node on stack
        let current = stack.pop();

        // put its value at end of string
        str += current.val;

        // if it has a left child put child on stack
        if(current.left !== null) stack.push(current.left);
        // if it doesn't have a left child put a null on the string
        else str += 'left';

        // if it has a right child put child on stack
        if(current.right !== null) stack.push(current.right);
        // if it doesn't have a right child put a null on the string
        else str += 'right';
    }
    // return string at the end
    return str;
}


// FROM DISCUSSION ON LEETCODE PAGE - RECURSIVE 4 LINE ANSWER WITH SUPER FAST RUNTIME
// THEY WROTE IN JAVA
// public boolean isSameTree(TreeNode p, TreeNode q) {
//     if(p==null && q==null) return true;
//     if((p==null && q!=null) || (p!=null && q==null)) return false;
//     if(p.val!=q.val) return false;
//     return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
// }
