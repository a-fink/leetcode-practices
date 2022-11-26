// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
//     Input: s = ["h","e","l","l","o"]
//     Output: ["o","l","l","e","h"]

// Example 2:
//     Input: s = ["H","a","n","n","a","h"]
//     Output: ["h","a","n","n","a","H"]

// Constraints:
//     1 <= s.length <= 105
//     s[i] is a printable ascii character.

var reverseString = function(s) {
    // put a pointer at start and a pointer at end, while they haven't crossed swap the values at their places then increment/decrement
    // will reverse the string with O(1) space and O(n) time (technically 1/2n)
    let start = 0;
    let end = s.length - 1;
    while(start < end){
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
};
// alternatively since they are giving an array, could just array.reverse()
