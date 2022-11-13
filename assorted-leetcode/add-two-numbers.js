// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
//     Input: l1 = [2,4,3], l2 = [5,6,4]
//     Output: [7,0,8]
//     Explanation: 342 + 465 = 807.

// Example 2:
//     Input: l1 = [0], l2 = [0]
//     Output: [0]

// Example 3:
//     Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//     Output: [8,9,9,9,0,0,0,1]

// Constraints:
//     The number of nodes in each linked list is in the range [1, 100].
//     0 <= Node.val <= 9
//     It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 var addTwoNumbers = function(l1, l2) {
    // incoming lists guaranteed to be non-empty so don't need to check for null on them
    // make a variable to hold the new list, pointers to the head of each, and a remainder variable that starts at 0
    let newList, currNew, val;
    let remainder = 0;
    let curr1 = l1;
    let curr2 = l2;

    // go through the linked lists while either still has nodes
    while(curr1 || curr2){
        let sum = 0;
        // if exist add l1 & l2 values to sum and advance their pointer to next node
        if(curr1){
            sum += curr1.val;
            curr1 = curr1.next;
        }
        if(curr2){
            sum += curr2.val;
            curr2 = curr2.next;
        }
        // then add remainder from prev step
        sum += remainder;

        // if sum < 10 set val to sum and set remainder to 0
        if(sum < 10){
            val = sum;
            remainder = 0;
        }
        // if sum >= 10 make new node with sum-10 and carry 1 as remainder
        else{
            val = sum - 10;
            remainder = 1;
        }

        // make a new node with val
        let node = new ListNode(val);

        // if newlist is null (first node) set newlist to node and set currnew to newlist
        if(!newList){
            newList = node;
            currNew = newList;
        }
        // otherwise set currnew's next to node then increment currnew
        else{
            currNew.next = node;
            currNew = currNew.next;
        }
    }

    // if there's still a remainder at the end we need to add one more node
    if(remainder > 0){
        let node = new ListNode(remainder);
        currNew.next = node;
        currNew = currNew.next;
    }

    // return linked list with answer
    return newList;
};
