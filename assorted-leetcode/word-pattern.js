// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
//     Input: pattern = "abba", s = "dog cat cat dog"
//     Output: true

// Example 2:
//     Input: pattern = "abba", s = "dog cat cat fish"
//     Output: false

// Example 3:
//     Input: pattern = "aaaa", s = "dog cat cat dog"
//     Output: false

// Constraints:
//     1 <= pattern.length <= 300
//     pattern contains only lower-case English letters.
//     1 <= s.length <= 3000
//     s contains only lowercase English letters and spaces ' '.
//     s does not contain any leading or trailing spaces.
//     All the words in s are separated by a single space.

var wordPattern = function(pattern, s) {
    // split s to array at spaces
    let words = s.split(' ');
    // if pattern string & array not same length -> false
    if(pattern.length !== words.length) return false;
    // make 2 hash maps to hold both directions
    let letterHash = new Map();
    let wordHash = new Map();

    // for 0->length pattern
    for(let i = 0; i < pattern.length; i++){
        // get letter & word
        let letter = pattern[i];
        let word = words[i];
        // get value from letter map, & value from word map
        let wordFromLetter = letterHash.get(letter);
        let letterFromWord = wordHash.get(word);
        // if either one exists, check matching
        if(wordFromLetter || letterFromWord){
            // if value from letter map != word -> false
            if(wordFromLetter !== word) return false;
            // if value from word map != letter -> false
            if(letterFromWord !== letter) return false;
        }
        // if neither exist put in both hash maps both directions
        else{
            letterHash.set(letter, word);
            wordHash.set(word, letter);
        }
    }

    // return true if make it here without returning
    return true;
    };
