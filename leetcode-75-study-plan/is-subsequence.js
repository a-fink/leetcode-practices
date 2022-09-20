// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing
// the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example1 Input: s = "abc", t = "ahbgdc" Output: true
// Example2 Input: s = "axc", t = "ahbgdc" Output: false
// Example3 Input: s = "b", t = "c" Output: false
// Example4 Input: s = "bb", t = "ahbgdc" Output: false
// Example5 Input: s = "ab", t = "baab" Output: true

var isSubsequence = function(s, t) {
    // originally tried to do this with a lot of various checks, there's an easier way
    // do need to iterate over string, and effectively remove things once you've used them
    // but better to do by indexes you're still considering than by doing complicated splicing etc

    // set up a variable for the index you're at in each s and t
    // while both are in bounds check if the letter you're at in s matches letter you're at in t
    // if it does, you found a match, increment both indeces
    // if it doesn't you need to keep looking for the letter in s in t, only incremment t's index
    let i = 0;
    let j = 0;

    while(i < s.length && j < t.length){
        // i only increments once we find a match
        if(s[i] === t[j]) i++;

        // j increments whether a match was found or not
        j++;
    }

    // once out of loop, if index for s reached the end of s then you found everything in s in t in the right order
    // if index for s is not at end then it failed
    if(i >= s.length) return true;
    else return false;
};
