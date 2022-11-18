// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).”

// Example 1:
//     Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
//     Output: 6
//     Explanation: The LCA of nodes 2 and 8 is 6.

// Example 2:
//     Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
//     Output: 2
//     Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// Example 3:
//     Input: root = [2,1], p = 2, q = 1
//     Output: 2

// Constraints:
//     The number of nodes in the tree is in the range [2, 105].
//     -109 <= Node.val <= 109
//     All Node.val are unique.
//     p != q
//     p and q will exist in the BST.

var lowestCommonAncestor = function(root, p, q) {
    // a depth first traversal with a stack preserves the shape of the tree
    // if we do a depth first traversal building paths to nodes we could find the paths to each p & q and traverse them
    // guaranteed that p & q are in the tree and the tree has at least 2 nodes so can skip a lot of checking for nulls and know an answer will always exist

    // make variables to hold the paths to p & q once we find them
    // make a stack (array with push/pop) and put the path to root in it
    let pathP, pathQ;
    let stack = [[root]];

    // while the stack is not empty
    while(stack.length > 0){
        // pop the top path off the stack
        let path = stack.pop();

        // look at (not pop) the last node in the path
        let curr = path[path.length - 1];

        // if it is p, store this path as pathP
        if(curr === p) pathP = path;

        // if it is q, store this path as pathQ
        if(curr === q) pathQ = path;

        // if we have found the paths to both nodes we can stop traversing, break
        if(pathP !== undefined && pathQ !== undefined) break;

        // otherwise, make a copy of path with each existing child added to the end & put it in the stack
        if(curr.left){
            let leftPath = path.concat(curr.left);
            stack.push(leftPath);
        }
        if(curr.right){
            let rightPath = path.concat(curr.right);
            stack.push(rightPath);
        }
    }

    // once we have arrays representing path to each node we want we can compare them
    // given the nature of the tree they should both be the same at root and should keep being the same until the LCA
    // so if we iterate through both arrays and find the first place they don't match or one of them becomes undefined, our lowest common ancestor will be 1 step back
    let i = 0;
    while(pathP[i] !== undefined || pathQ[i] !== undefined){
        if(pathP[i] !== pathQ[i]) return pathP[i-1];
        i++;
    }
};
