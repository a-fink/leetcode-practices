// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:
//     Input: s = "the sky is blue"
//     Output: "blue is sky the"

// Example 2:
//     Input: s = "  hello world  "
//     Output: "world hello"
//     Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:
//     Input: s = "a good   example"
//     Output: "example good a"
//     Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Constraints:
//     1 <= s.length <= 104
//     s contains English letters (upper-case and lower-case), digits, and spaces ' '.
//     There is at least one word in s.


// this is one of the problems kevin used as an example of the coffin problem
// if you don't know the trick it's very hard to think of the solution
// trick in this case is to reverse the entire string, and then go through and reverse each word again so they will
// reverses word placement in string without making words backwards

// can do more efficient version of this with pointers etc to reverse, but doing with built in functions for now to remember the pattern for this
// also need to study regex, looked up / copied how to use regex to remove excess spaces
var reverseWords = function(s) {
    // use replace/trim methods with regex to remove excess spaces(study these more!)
    s = s.replace(/\s+/g, ' ').trim()

    // reverse the entire string - can't reverse string, need to split to array, reverse, and join
    s = s.split('').reverse().join('');

    // split the reversed full string at the spaces to get an array with each word as a string
    let sArray = s.split(' ');

    // go through the array and reverse each string - can't reverse string, need to split to array, reverse, and join
    sArray = sArray.map(el => el.split('').reverse().join(''));

    // join the array back together with a space between words
    s = sArray.join(' ');

    return s;
};
