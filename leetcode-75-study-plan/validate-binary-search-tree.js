// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
//     The left subtree of a node contains only nodes with keys less than the node's key.
//     The right subtree of a node contains only nodes with keys greater than the node's key.
//     Both the left and right subtrees must also be binary search trees.

// Example 1:
//     Input: root = [2,1,3]
//     Output: true

// Example 2:
//     Input: root = [5,1,4,null,null,3,6]
//     Output: false
//     Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
//     The number of nodes in the tree is in the range [1, 104].
//     -2^31 <= Node.val <= 2^31 - 1

// RECURSIVE SOLUTION - HAD TO RESEARCH
var isValidBST = function(root) {
    // will use this as driver for recursive helper function
    return isValidHelper(root, null, null)
}

function isValidHelper(root, min, max){
    // min/max will be null when first called with root
    // after that, when we call left we will set current as the max, and when we call right we will set current as the min
    // base cases
    // if root is null we have reached the end of a path on our tree, this path is ok so return true
    if(root === null) return true;
    // if min exists this node is the right child of parent, if our current node is less than or equal to min we fail
    if(min !== null && root.val <= min) return false;
    // if max exists this node is the left child of parent, if our current node is greater than or equal to max we fail
    if(max !== null && root.val >= max) return false;

    // recursive step
    // call left with curr as max, and right with curr as min (other will be null)
    // AND the two results together so any false will cause the whole thing to go false up the chain
    return isValidHelper(root.left, min, root.val) && isValidHelper(root.right, root.val, max);
}

// ATTEMPTED TO DO WITH ITERATION & THE NUMBER OF THINGS TO KEEP TRACK OF GETS VERY COMPLICATED AND WOULD BE HARD CODE TO MAINTAIN
// IN THIS CASE RECURSION IS THE BETTER OPTION FOR READABILITY AND MAINTAINABILITY EVEN IF IT MAY TAKE SOME EXTRA MEMORY FOR CALL STACK
// THE BELOW WORKS IN CASES OF PARENTS/CHILDREN AND CURRENT VS ROOT, BUT FAILS AT FINDING INVALID NODES IN GRANDCHILDREN VS GRANDPARENT RELATIONSHIPS
// var isValidBST = function(root) {
//     // at every node, if children exist, left val must be smaller than node val and right val must be larger than node val
//     // traverse tree & check this case at each node - if any fail whole tree fails - if make it to end it's valid
//     // also need to track which sub-tree of root a node belongs to so we can confirm it is on the right side of root
//     // order of traversal doesn't matter, iterative DFS with stack is the most efficient so use that
//     // NOTE - CONSTRAINTS SPECIFY ONLY LESS THAN OR GREATER THAN, MEANS CAN'T ALLOW EQUALS, NEED TO EXCLUDE IN BOTH CASES (doing version of BST w/no duplicates allowed)

//     // constraints guarantee that tree has at least 1 node so don't need to check for root being null

//     // make a stack (array with push/pop) - will put pairs in stack of the form [node, direction]
//     // put root in stack with a direction of null
//     let stack = [[root, null]];

//     // since we're not allowing any duplicates we will also need to track/check for duplicated values - make a set for this
//     let valuesUsed = new Set();

//     // while stack isn't empty
//     while(stack.length > 0){
//         // pop top node pair from stack & destructure to get node & direction
//         let [curr, dir] = stack.pop();
//         console.log(`node is ${curr.val} subtree is ${dir}`);

//         // if the current node's value already exists in the set it fails, otherwise add it to the set for future checks
//         if(valuesUsed.has(curr.val)) return false;
//         else valuesUsed.add(curr.val);

//         // confirm left & right children (if exist) are valid compared to root
//         // if either is not return false, otherwise add any existing children to the stack along with their direction
//         // direction will be the same as the current node's direction, except for root node where direction will come in as null and should be set based on child
//         if(curr.left){
//             if(curr.left.val >= curr.val) return false;

//             if(dir === null) stack.push([curr.left, 'left']);
//             else stack.push([curr.left, dir]);
//         }

//         if(curr.right){
//             if(curr.right.val <= curr.val) return false;

//             if(dir === null) stack.push([curr.right, 'right']);
//             else stack.push([curr.right, dir]);
//         }

//         // confirm current node's value is on the right side of root
//         // if direction is left and current node is greater than root it fails
//         if(dir === 'left' && curr.val > root.val) return false;
//         // if direction is right and current node is smaller than root it fails
//         if(dir === 'right' && curr.val < root.val) return false;
//     }

//     // if make it to the end without hitting a false return true
//     return true;
// };
