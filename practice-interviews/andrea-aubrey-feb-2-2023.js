// given the head of a singly linked list, reverse the list and return the reversed list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function reverseSinglyLinked(head){
    // if head is null, return null (empty list)
    if(head === null) return null;

    // set pointers current, next, prev
    let curr = head;
    let next = prev = null;

    // while current
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // prev will have head of list in reverse
    return prev;
}

// 1->2->3->null
// prev = null
// curr = 1->2->3->null

// next = 2->3->null
// curr = 1->null
// prev = 1->null
// curr = 2->3->null

// next = 3->null
// curr = 2->1->null
// prev = 2->1->null
// curr = 3->null

// next = null
// curr = 3->2->1-null
// prev = 3->2->1-null
// curr = null
