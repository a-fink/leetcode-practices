// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
//     Input: root = [3,9,20,null,null,15,7]
//     Output: [[3],[9,20],[15,7]]

// Example 2:
//     Input: root = [1]
//     Output: [[1]]

// Example 3:
//     Input: root = []
//     Output: []

// Constraints:
//     The number of nodes in the tree is in the range [0, 2000].
//     -1000 <= Node.val <= 1000

var levelOrder = function(root) {
    // breadth first traversal will go level by level
    // if root is null return an empty array
    if(root === null) return [];

    // we want all nodes at same level to wind up in the same inner array of the answer, rather than each node's children in their own array like normal BFS would produce
    // attempted to do by calculating possible number of nodes at each level and subtracting each time I had checked 2 and reseting when count reached 0 but this breaks when tree is unbalanced in certain cases, because if there's lots of null children in tree count/queue get out of synch
    // instead keep track of what depth we are at when we put thing in the queue and use that as the index of our answers array to build the rows

    // make a queue (array with push/shift) and put root in it with a level of 0 - queue values will look like [node, level]
    let q = [[root, 0]];

    // make an array to hold the answer and put array with root's values in it (root is the only node at level 0)
    let answerArray = [[root.val]]

    // while queue has items
    while(q.length > 0){

        // get first entry in queue and then get current node and its level from that
        let currArray = q.shift();
        let curr = currArray[0];
        let level = currArray[1];

        // increment the level so that it now refers to the level of curr's children
        level++;
        // attempt to get the array from our answer array at that level, if it doesn't exist make it an empty array
        let children;
        if(answerArray[level]) children = answerArray[level];
        else children = [];

        // if node has a left child
        if(curr.left){
            // put its value in the children array and put node in the queue with the childs level
            children.push(curr.left.val);
            q.push([curr.left, level]);
        }

        // if node has a right child
        if(curr.right){
            // put its value in the array and put node in the queue
            children.push(curr.right.val);
            q.push([curr.right, level]);
        }

        // if children has entries, insert or replace the new children array at index of level in answerArray
        if(children.length > 0){
            answerArray[level] = children;
        }
    }

    // return the answers array
    return answerArray;
};
