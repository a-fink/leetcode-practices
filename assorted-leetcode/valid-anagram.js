// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
//     Input: s = "anagram", t = "nagaram"
//     Output: true

// Example 2:
//     Input: s = "rat", t = "car"
//     Output: false

// Constraints:
//     1 <= s.length, t.length <= 5 * 104
//     s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
var isAnagram = function(s, t) {
    // constraints say both strings will have at least 1 letter so no check needed for empty strings
    // if s & t are not the same length they can't be valid anagrams - return false
    if(s.length !== t.length) return false;

    // go through s & hash a count of each letter
    let hash = new Map();
    for(let i = 0; i < s.length; i++){
        let count = hash.get(s[i]);
        if(count) count++;
        else count = 1;
        hash.set(s[i], count);
    }

    // go through t & mark off each matching letter (decrement count, if count goes to 0 delete entry)
    for(let j = 0; j < t.length; j++){
        let count = hash.get(t[j]);
        // if count doesn't exist we found a letter that is in t more times than in s (or not in s at all) - return false
        if(!count) return false;
        // if count exists decrement it, if it would become zero remove it from the hash entirely
        if(count){
            count--;
            if(count === 0) hash.delete(t[j]);
            else hash.set(t[j], count);
        }
    }

    // at end, hash should be empty again if t is an anagram of s - if it's not return false
    if(hash.size !== 0) return false;

    //if make it here return true
    return true;
};

// followup - to do unicode values we would need to check when going through our strings if we hit a '\' if we do and it's followed by a u then the \u & next 4 characters
// signify a unicode character and should be hashed/unhashed together as if they were a single character
