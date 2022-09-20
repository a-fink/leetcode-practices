// Given the head of a singly linked list, reverse the list, and return the reversed list.

// example1 Input: head = [1,2,3,4,5] Output: [5,4,3,2,1]
// example2 Input: head = [1,2] Output: [2,1]
// example3 Input: head = [] Output: []

var reverseList = function(head) {
    // if head is null there is no list, return null
    if(head === null) return null;

    // if head.next is null there's only 1 node, can't reverse, return list as is
    if(head.next === null) return head;

    // for all other cases
    // set a pointer called curr to head, a pointer called prev to null, and set up a pointer called next
    let curr = head;
    let prev = null;
    let next;
    // while current is truthy (not null)
    while(curr){
        // set next to curr.next
        // set curr.next to prev
        // set prev to curr
        // set curr to next
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // once loop completes, prev will be pointing to the head of the reversed list, return prev
    return prev;
};
