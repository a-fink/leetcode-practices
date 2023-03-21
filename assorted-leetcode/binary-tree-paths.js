// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Example 1:
//     Input: root = [1,2,3,null,5]
//     Output: ["1->2->5","1->3"]

// Example 2:
//     Input: root = [1]
//     Output: ["1"]

// Constraints:
//     The number of nodes in the tree is in the range [1, 100].
//     -100 <= Node.val <= 100

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // do a depth first traversal with stack, put paths on the stack, when reach a leaf put a string of its path into the final answer array
    // constraints say there will always be at least one node, so don't need to check for null root
    const answer = [];

    const stack = [[root]];

    while(stack.length > 0){
      let currPath = stack.pop();
      let lastNode = currPath[currPath.length - 1];

      if(!lastNode.left && !lastNode.right){
        let pathString = '';
        currPath.forEach(el => {
          if(pathString === '') pathString += el.val;
          else pathString = pathString + '->' + el.val;
        })
        answer.push(pathString);
      }

      else{
        if(lastNode.left) stack.push(currPath.concat(lastNode.left));
        if(lastNode.right) stack.push(currPath.concat(lastNode.right));
      }
    }

    return answer;
};
