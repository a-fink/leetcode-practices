// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
//     Input: ransomNote = "a", magazine = "b"
//     Output: false

// Example 2:
//     Input: ransomNote = "aa", magazine = "ab"
//     Output: false

// Example 3:
//     Input: ransomNote = "aa", magazine = "aab"
//     Output: true

// Constraints:
//     1 <= ransomNote.length, magazine.length <= 105
//     ransomNote and magazine consist of lowercase English letters.

var canConstruct = function(ransomNote, magazine) {
    // if magazine is shorter than ransomNote cannot construct ransomNote
    // go through magazine & hash count of all characters
    // go through ransomNote and remove letters from hash, if reach a letter not in hash false
    if(ransomNote.length > magazine.length) return false;

    const hash = new Map();

    for(i = 0; i < magazine.length; i++){
        const count = hash.get(magazine[i]);
        if(count === undefined) hash.set(magazine[i], 1);
        else hash.set(magazine[i], count + 1);
    }

    for(j = 0; j < ransomNote.length; j++){
        const count = hash.get(ransomNote[j]);
        if(count === undefined) return false;
        else if(count === 1) hash.delete(ransomNote[j]);
        else hash.set(ransomNote[j], count - 1);
    }

    // if get all the way through then it passed
    return true;
};
