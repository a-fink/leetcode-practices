// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:
//     Input: s = "abab"
//     Output: true
//     Explanation: It is the substring "ab" twice.

// Example 2:
//     Input: s = "aba"
//     Output: false

// Example 3:
//     Input: s = "abcabcabcabc"
//     Output: true
//     Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

// Constraints:
//     1 <= s.length <= 104
//     s consists of lowercase English letters.

// go through string and check for possible patterns - full length/pattern length is whole number
// if find a pattern
    // slice the full string at the pattern length and see if equal
    // if yes slice off next bit and keep checking
    // otherwise fails
var repeatedSubstringPattern = function(s) {
    const fullLength = s.length;
    let pattern;

    // start false and or in result for each pattern, any true will make end result true
    let foundMatch = false;

    for(let i = 1; i < fullLength; i++){
        if(Number.isInteger(fullLength/i)){
            pattern = s.slice(0, i);

            let allMatch = true;
            let start = 0;
            let end = pattern.length;

            while(end <= s.length){
                const subString = s.slice(start, end);
                if(subString !== pattern){
                    allMatch = false;
                    break;
                }
                start = end;
                end += pattern.length;
            }

            foundMatch = foundMatch || allMatch;
        }
    }

    return foundMatch;
};
