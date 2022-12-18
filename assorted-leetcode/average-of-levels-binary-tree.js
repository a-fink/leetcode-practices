// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

// Example 1:
//     Input: root = [3,9,20,null,null,15,7]
//     Output: [3.00000,14.50000,11.00000]
//     Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
//     Hence return [3, 14.5, 11].

// Example 2:
//     Input: root = [3,9,20,15,7]
//     Output: [3.00000,14.50000,11.00000]

// Constraints:
//     The number of nodes in the tree is in the range [1, 104].
//     -231 <= Node.val <= 231 - 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var averageOfLevels = function(root) {
    // feels like a BFS, but we need to know level at each point and save group of values at that level, DFS preserves shape of tree so use instead
    // constraints guarantee at least one node so don't need to check for null root here
    // make hash map call helper recursive function to build our map
    let hash = new Map();
    recursiveMap(root, 0, hash);
    // will result in map with keys of each level and values of an array that holds [sum of level, count of nodes in level]
    // go through key/value pairs of map and calc average at each level and store in answer array (JS iterates over hashmaps in insertion order)
    let answer = [];
    for(const [key, value] of hash){
        let average = value[0] / value [1];
        answer.push(average);
    }

    return answer;
};

// recursive helper to build a map of our tree
// inputs: root node, level we're on, map we're building
// returns: none
function recursiveMap(root, level, hash){
    // base case - if root is null we don't need to do anything here, just return
    if(root === null) return;

    // if level exists as key in map, add root's value to our sum and increment our count at this level
    if(hash.has(level)){
        let valueArray = hash.get(level);
        valueArray[0] += root.val;
        valueArray[1]++;
        hash.set(level, valueArray);
    }

    // otherwise add key to map with value of root's value & 1 node at this level so far
    else{
        hash.set(level, [root.val, 1]);
    }

    // call function again with left child, then right child
    recursiveMap(root.left, level + 1, hash);
    recursiveMap(root.right, level + 1, hash);
}
