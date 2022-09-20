// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

//Example 1: Input: s = "egg", t = "add" Output: true
//Example 2: Input: s = "foo", t = "bar" Output: false
//Example 3: Input: s = "badc", t = "babc" Output: false
var isIsomorphic = function(s, t) {
    // if two strings lengths don't match they can't be isomorphic
    // build a hash map between the first string and the second string
    // if at any point you reach
        // a key already in the map but the value doesn't match then it fails
        // a key not in the map but a value already in the map then it fails

    // confirm lengths - if don't match return false
    if(s.length !== t.length) return false;

    // make a hash map to use
    let hash = new Map();

    // iterate over both strings
    for(let i = 0; i < s.length; i++){
        let key = s[i];
        let value = t[i];

        // see if letter from s is already a key
        // if it is, but value doesn't match it fails return false
        if(hash.has(key) && (hash.get(key) !== value)) return false;

        // if letter from s is not a key - check whether letter from t is already a value in the map
        if(!hash.has(key)){

            // get iterator object of values, check each to see if they match value, if any do return false
            for(const val of hash.values()){
                if(val === value) return false;
            }

            // otherwise add key/value pair and keep looking
            hash.set(key, value);
        }
    }

    // if get to end of for loop and haven't returned false, then the two strings pass, return true
    return true;
};
