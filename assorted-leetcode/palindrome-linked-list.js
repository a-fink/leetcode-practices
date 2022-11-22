// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:
//     The number of nodes in the list is in the range [1, 105].
//     0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// O(n) space & time - run through list making an array of each node value - check array from font & back moving inward that all values mirror each other
// Attempting O(n) time O(1) space option by finding middle of list, reversing 2nd half, then checking from beginning & middle that values match
var isPalindrome = function(head) {
    // constraints say list will always have at least one node so no check needed for null head
    // based on test cases, a 1 node list is a palindrome, and a 2 node list is if both nodes match

    // if list has 1 node (head.next is null) return true
    if(!head.next) return true;
    // if list has 2 nodes (head.next.next is null) check if both node values match and return based on that
    if(!head.next.next) return head.val === head.next.val;

    // for longer lists, we will find middle of list, reverse the 2nd half, then check if the two halfs match each other
    // if we start a slow pointer and fast pointer at head, and each time move slow 1 and fast 2, when fast hits last node or end
    // slow will be pointing to midpoint (if odd # nodes) or 2nd of the two middle nodes (if even # nodes)
    // will also track where slow last was so we can have a pointer to the one right before middle for when we reverse in next step
    let slow = head;
    let fast = head;
    let beforeMid = null;
    while(fast && fast.next){
        beforeMid = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the 2nd half of the list from mid to end, and then point our 1 before mid at that to reconnect the 2 halves (reversed list will be in prev at end)
    let prev = null;
    let curr = slow;
    let next;
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    beforeMid.next = prev;

    // make a pointer to be a placeholder at mid (1 past beforeMid)
    // start a pointer at head, and a pointer at mid
    // move them both forward 1 node each iteration and check if values match - if they don't it fails return false
    // to account for 1 extra node on 2nd half when odd number of nodes in original list - stop when start has reached mid
    // means we've checked entire length of 1st half against 2nd half and we're ok (palindrome can have single middle node & be fine)
    let mid = beforeMid.next;
    let startRunner = head;
    let midRunner = mid;
    while(startRunner !== mid){
        if(startRunner.val !== midRunner.val) return false;
        startRunner = startRunner.next;
        midRunner = midRunner.next;
    }

    // if make it here list has passed all checks and is a valid palindrome - return true
    return true;
};
