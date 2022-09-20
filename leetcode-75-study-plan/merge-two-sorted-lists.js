// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example1 Input: list1 = [1,2,4], list2 = [1,3,4] Output: [1,1,2,3,4,4]
// Example2 Input: list1 = [], list2 = [] Output: []
// Example3 Input: list1 = [], list2 = [0] Output: [0]

// * Definition for singly-linked list.
// * function ListNode(val, next) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.next = (next===undefined ? null : next)
// * }

var mergeTwoLists = function(list1, list2) {
    // set up a variable to hold the next list and a second to point at the current node of the new list
    let head, curr;

    // if both lists are null, return null
    if(list1 === null && list2 === null) return null;

    // if either list is null return the other list
    if(list1 === null) return list2;
    if(list2 === null) return list1;

    // if both lists have values then we need to merge them
    // while either list still has values we need to keep going
    while(list1 || list2){
        // NOTE - CANNOT COMBINE NULL AND NOT NULL CHECKS - TRIED AND IT WAS CAUSING IT TO TRY AND READ NULL VALUES DURING THE COMPARISSONS

        // if both lists still have value we need to compare the values
        if(list1 && list2){

            // if value in current node of list1 is less than or equal to value in current node of list2,
            // use list1 and then move it ahead
            if(list1.val <= list2.val){
                // if head hasn't been set up yet (1st time through) set head and curr to list1
                if(!head){
                    head = list1;
                    curr = list1;
                }

                // if head exists set curr.next to list1 then move curr ahead
                else{
                    curr.next = list1;
                    curr = curr.next;
                }

                // move list1 forward
                list1 = list1.next;
            }

            // otherwise value in list1 is larger, so use list2 and move it ahead
            else{
                // if head hasn't been set up yet (1st time through) set head and curr to list2
                if(!head){
                    head = list2;
                    curr = list2;
                }

                // if head exists set curr.next to list2 then move curr ahead
                else{
                    curr.next = list2;
                    curr = curr.next;
                }

                // move list2 forward
                list2 = list2.next;
            }
        }

        // no checks for head needed if one of the lists is null, one of the lists starting null is already handled
        // outside the while loop, so won't make it to the below two checks until after head has been set

        // if list2 is null use list1 and move it forward
        else if(list2 === null){
            curr.next = list1;
            curr = curr.next;
            list1 = list1.next;
        }

        // if list1 is null use list2 and move it forward
        else if(list1 === null){
            curr.next = list2;
            curr = curr.next;
            list2 = list2.next;
        }
    }

    // after both lists are at end and loop breaks return the pointer to the head of the next list we built
    return head;
};
