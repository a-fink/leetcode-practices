// Given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non-space characters.

// Example 1:
//     Input: s = "Hello, my name is John"
//     Output: 5
//     Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// Example 2:
//     Input: s = "Hello"
//     Output: 1

// Constraints:
//     0 <= s.length <= 300
//     s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
//     The only space character in s is ' '.


/**
 * originally tried doing this with string.split but that gives weird results with extra spaces
 * tried with trim & string.split but that still has issues if there are extra spaces in the middle of the sentence
 * regexp turned out to the be the answer
 * originally had \w in the regexp by accident but that is any alphanumeric character and doesn't include some specials
 * need \S to get all non-space characters
 */
var countSegments = function(s) {
    // regexp to catch all sets of non-space characters, g flag for global (run many times rather than just first match)
    const regex = /(\S+)/g;
    // the match regexp function gets run on the string and passed the regexp to match - if no matches found this will be null
    const matchesArray = s.match(regex);
    // console.log(matchesArray);
    // return 0 for null (no matches) or the length of the matches array
    return matchesArray === null ? 0 : matchesArray.length;
};
