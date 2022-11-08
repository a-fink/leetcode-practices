// Note: Try to solve this task in O(list size) time using O(1) additional space, since this is what you'll be asked during an interview.
// Given a singly linked list of integers l and a non-negative integer n, move the last n list nodes to the beginning of the linked list.

// Example
//     For l = [1, 2, 3, 4, 5] and n = 3, the output should be
//     solution(l, n) = [3, 4, 5, 1, 2];

//     For l = [1, 2, 3, 4, 5, 6, 7] and n = 1, the output should be
//     solution(l, n) = [7, 1, 2, 3, 4, 5, 6].

// Input/Output
//     [execution time limit] 4 seconds (js)

//     [input] linkedlist.integer l
//     A singly linked list of integers.
//     Guaranteed constraints:
//     0 ≤ list size ≤ 105,
//     -1000 ≤ element value ≤ 1000.

//     [input] integer n
//     A non-negative integer.
//     Guaranteed constraints:
//     0 ≤ n ≤ list size.

//     [output] linkedlist.integer
//     Return l with the n last elements moved to the beginning.

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function solution(l, n) {
    // if list is null, can't move anything, return null
    if(l === null) return null;

    // guaranteed that n <= length so don't need to deal with wrapping multiple times case

    // count the length & set a pointer at tail
    let count = 0;
    let curr = l;
    let tail = l;
    while(curr){
        // increase count
        count++;
        // if curr has a next, move tail there (moving tail ahead of curr & checking so tail will stop at last node not go to null)
        if(curr.next) tail = curr.next;
        // update curr
        curr = curr.next;
    }

    // moving the last n elements to the front is the same as moving length - n elements to the end
    // caluclate number of moves to make and set curr back to head
    let moveCounter = count - n;
    curr = l;

    // while there are still moves to make, remove head, add at tail
    while(moveCounter > 0){
        // curr is at head, move head to curr's next
        l = curr.next;
        // set curr's next to null so it's no longer connected to the list
        curr.next = null;
        // set tail's next to point to curr
        tail.next = curr;
        // update tail
        tail = tail.next;
        // point curr back at head for next iteration
        curr = l;
        // decrease counter
        moveCounter--;
    }

    // return the list at the end
    return l;
}
