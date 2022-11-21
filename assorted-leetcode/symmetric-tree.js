// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
//     Input: root = [1,2,2,3,4,4,3]
//     Output: true

// Example 2:
//     Input: root = [1,2,2,null,3,null,3]
//     Output: false

// Constraints:
//     The number of nodes in the tree is in the range [1, 1000].
//     -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?
var isSymmetric = function(root) {
    // if root has no children - return true (one node is symetric with itself)
    if(root.left === null && root.right === null) return true;
    // if root has left or right - return false
    if(root.left === null || root.right === null) return false;

    // if we passed the two checks above we know we have both left & right children
    // make 2 stacks (array push/pop) and put left and right child in them
    let leftStack = [];
    let rightStack = [];
    leftStack.push(root.left);
    rightStack.push(root.right);

    // while either stack still has items keep looking
    while(leftStack.length > 0 || rightStack.length > 0){
        // pop top off left and put it in left pointer, pop top off right and put it in right pointer
        let leftCurr = leftStack.pop();
        let rightCurr = rightStack.pop();

        // NOTE - need to put nulls on and check for them, b/c if only do existing children could get false positives (checking if have 3 undefined & undefined 3 could have last on stack match but out of order)
        // if both are undefined continue (shouldn't ever hit this but just in case)
        if(leftCurr === null && rightCurr === null) continue;

        // if either left or right is undefined our tree fails - return false
        if(leftCurr === null || rightCurr === null) return false;

        // if left & right values don't match our tree fails - return false
        if(leftCurr.val !== rightCurr.val) return false;

        // put left's children on left stack from left to right - need to put nulls on and check for them, b/c if only do existing children could get false positives
        leftStack.push(leftCurr.left);
        leftStack.push(leftCurr.right);

        // put right's children on right stack from right to left - need to put nulls on and check for them, b/c if only do existing children could get false positives
        rightStack.push(rightCurr.right);
        rightStack.push(rightCurr.left);
    }

    // if made it through all our checks tree is valid - return true
    return true;
};
