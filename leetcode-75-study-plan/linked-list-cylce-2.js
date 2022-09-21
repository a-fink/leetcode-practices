// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.

// Example1 Input: head = [3,2,0,-4], pos = 1 Output: tail connects to node index 1 Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example2 Input: head = [1,2], pos = 0 Output: tail connects to node index 0 Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example3 Input: head = [1], pos = -1 Output: no cycle Explanation: There is no cycle in the linked list.

var detectCycle = function(head) {
    // question - can we assume each node has a unique value - trying it that way and will see what happens
    // base on test cases node values are not unique, so we need another way to know if we're at the same value
    // can actually hash the nodes themselves, rather than the values, and JS can tell if it's the same node due to memory location

    // go through the linked list, keeping a count of the index and hashing the node/index
    let hash = new Map();
    let curr = head;
    let index = 0;

    while(true){
        // if at any point current node is null then we've hit the end of the list and there is no cycle, return null
        if(curr === null) return null;

        // make a hash and at each node see if hash already has node, if it does we've found the cycle, return the node
        // if it doesn't add node and current index to hash
        if(hash.has(curr)) return curr;
        else hash.set(curr, index);

        // increment index and move current ahead by 1 node
        index++;
        curr = curr.next;
    }
};
