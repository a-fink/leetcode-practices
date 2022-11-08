// Given a linked list l, reverse its nodes k at a time and return the modified list. k is a positive integer that is less than or equal to the length of l. If the number of nodes in
// the linked list is not a multiple of k, then the nodes that are left out at the end should remain as-is.
// You may not alter the values in the nodes - only the nodes themselves can be changed.
// Example
//     For l = [1, 2, 3, 4, 5] and k = 2, the output should be
//     solution(l, k) = [2, 1, 4, 3, 5];

//     For l = [1, 2, 3, 4, 5] and k = 1, the output should be
//     solution(l, k) = [1, 2, 3, 4, 5];

//     For l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] and k = 3, the output should be
//     solution(l, k) = [3, 2, 1, 6, 5, 4, 9, 8, 7, 10, 11].

// Input/Output
//     [execution time limit] 4 seconds (js)

//     [input] linkedlist.integer l - A singly linked list of integers.
//     Guaranteed constraints:
//     1 ≤ list size ≤ 104,
//     -109 ≤ element value ≤ 109.

//     [input] integer k - The size of the groups of nodes that need to be reversed.
//     Guaranteed constraints:
//     1 ≤ k ≤ l size.

//     [output] linkedlist.integer
//     The initial list, with reversed groups of k elements.

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function solution(l, k) {
    // if list is null return null (can't reverse empty list)
    if(l === null) return null;
    // if k = 1 return l (reversing 1 node changes nothing)
    if(k <= 1) return l;

    // count the length of the list
    let curr = l;
    let count = 0;
    while(curr){
        count++;
        curr = curr.next;
    }

    // if length < k return l (don't reverse partial groups)
    if(count < k) return l;

    // otherwise call recursive reversal function and return its result
    return reverse(l, k, count);
}

// recursive reversal function
// inputs - head of a linked list (or head of partial list), group size to reverse, length
function reverse(head, k, length){
    // base cases
    // if head is null return null (can't reverse an empty list)
    if(head === null) return null;
    // if length is less than k return head (don't reverse partial groups)
    if(length < k) return head;

    // recursive steps
    // starting at head, move ahead until it is one past the nodes we intend to reverse (k steps - 0<k or 1<=k)
    // (if ahead is last node being reversed, its next will change when it moves and we can't use that as our end case for reversing)
    let ahead = head;
    for(i = 0; i < k; i++){
        ahead = ahead.next;
    }

    // set pointers - curr at head, next and prev as null
    let curr = head;
    let prev, next = null;

    // while curr exists and hasn't caught up with ahead, keep reversing nodes
    // reversed list will wind up in prev with a null at the end, and head pointing at the last node before the null
    while(curr && curr !== ahead){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // head still points at its original node, now at end of reversed list (in prev), make head's next point at result of recursively reversing next portion of list
    head.next = reverse(curr, k, length-k);

    // prev now has everything in the order we want, return it
    return prev;
}
