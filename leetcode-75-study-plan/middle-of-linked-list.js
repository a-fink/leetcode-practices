// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// list will have at least 1 node

// Example1 Input: head = [1,2,3,4,5] Output: [3,4,5] Explanation: The middle node of the list is node 3.
// Example2 Input: head = [1,2,3,4,5,6] Output: [4,5,6] Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

var middleNode = function(head) {

    // make one pass to count all the nodes in the list
    let count = 0;
    let curr = head;

    while(curr){
        count++;
        curr = curr.next;
    }

    // find the middle node
    let middle;

    // if count is odd middle is half of count rounded up
    if(count % 2 === 1) middle = Math.ceil(count/2);

    // if count is even middle is count/2 + 1 (to get 2nd middle from even set)
    else middle = count/2 + 1;

    // set current back to head and make another pass through list and return the correct node
    curr = head;
    for(let i = 1; i < middle; i++){
        curr = curr.next;
    }

    // return the current node
    return curr;
};
