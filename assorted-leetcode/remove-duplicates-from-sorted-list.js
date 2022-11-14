// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
//     Input: head = [1,1,2]
//     Output: [1,2]

// Example 2:
//     Input: head = [1,1,2,3,3]
//     Output: [1,2,3]

// Constraints:
//     The number of nodes in the list is in the range [0, 300].
//     -100 <= Node.val <= 100
//     The list is guaranteed to be sorted in ascending order.

var deleteDuplicates = function(head) {
    // if head is null no list to traverse, return null
    if(head === null) return null;

    // if only one node there's no duplicates to remove, return the list as is
    if(head.next === null) return head;

    // set a curr pointer at head of the list
    let curr = head;

    // while curr exists and its next exists
    while(curr && curr.next){
        // know list is sorted so duplicates will be adjacent, if next's value is same as current's value we need to remove next as a duplicate
        // set curr's next to 2 nodes ahead to drop the duplicate from the list
        if(curr.val === curr.next.val) curr.next = curr.next.next;
        // if next's value is different than current value there's no duplicates of current value, move current ahead and keep checking
        else curr = curr.next;
    }

    // return the list at the end now that duplicates are removed
    return head;
};
