// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
//     Input: head = [3,2,0,-4], pos = 1
//     Output: true
//     Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
//     Input: head = [1,2], pos = 0
//     Output: true
//     Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
//     Input: head = [1], pos = -1
//     Output: false
//     Explanation: There is no cycle in the linked list.

// Constraints:
//     The number of the nodes in the list is in the range [0, 104].
//     -105 <= Node.val <= 105
//     pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

// O(n) memory solution is to go through the list and put each node in a set
// confirmed through console logging that another pointer to the same node will return a true with ===
var hasCycleLinear = function(head) {
    // set pointer at head and make a set to hold visited nodes
    let curr = head;
    const set = new Set();

    while(curr){
        // try to get the current node from the set
        const test = set.has(curr);

        // if it's there we have a cycle return true
        if(test) return true;

        // otherwise add current node to the set and keep looking
        set.add(curr);
        curr = curr.next;
    }

    // if make it to end of loop without finding return false
    return false;
}

// trying to do two pointers method like array with 1 staying still and one moving causes endless loops
    // cannot check if traveling pointer becomes null because in a loop it never will, so can't use that to know when to update stationary
    // if loop happens after the position stationary starts at will never find it and will get an endless loop
// instead through some research can try modifying the value of any node we have seen, then if find that value again we have a loop

// O(1) memory solution - if ok for problem to mutate list, change value every time we visit a node, then if find that value again we have a loop
var hasCycleConstant = function (head){
    // if list null, or next is null (0 or 1 nodes) there's no cycle
    if(head === null || head.next === null) return false;

    // start curr at beginning of list
    let curr = head;

    // while current exists keep looking
    while(curr){
        // if current node has a value of infinity it means we have been here before, found a cycle
        if(curr.val === Infinity) return true;

        // otherwise change the value of the current node to infinity then advance current to keep looking
        curr.val = Infinity;
        curr = curr.next;
    }

    // if get past while loop it means curr hit end of list without finding a cycle, return false
    return false;
}

// two pointers method that will work is the fast and slow pointer method
// if one pointer moves at speed 1 and other moves at speed 2 the fast pointer will eventually catch the slow one
// like 2 runners on a track, if one is going faster at some point in time they will wind up in same place as slower runner as they lap them
var hasCycleConstantFaster = function (head){
    // if list null, or next is null (0 or 1 nodes) there's no cycle
    if(head === null || head.next === null) return false;

    // start slow at 1st node and fast at 2nd node
    let slow = head;
    let fast = head.next;

    // iterate over list, moving slow ahead by 1 and fast ahead by 2 each time
    // if there's not a cycle then fast will be the first one to find a null
    // we will be making fast look at its .next.next so could set while loop based on fast.next existing, but if fast somehow gets to null then we get error
    // set while loop to run while fast exists and check within loop to solve
    while(fast && fast.next){
        if(slow === fast) return true;

        // move slow either way
        slow = slow.next;

        // if fast.next exists move fast ahead 2
        if(fast.next) fast = fast.next.next;

        // otherwise we are done looking because we know fast will hit a null which means no cycle, so break out of the loop
        else break;
    }

    // if get out of loop without finding a loop return false
    return false;
}
