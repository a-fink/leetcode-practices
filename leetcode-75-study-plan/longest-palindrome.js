// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example1 Input: s = "abccccdd" Output: 7 Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example2 Input: s = "a" Output: 1 Explanation: The longest palindrome that can be built is "a", whose length is 1.

var longestPalindrome = function(s) {
    // constraints say all strings will be 1 or more in length
    // if string is length 1 it's automatically a palindrome, return 1 to skip rest of checking
    if(s.length === 1) return 1;

    // a palindrome can have 1 single letter, then the rest must be pairs
    // go through string and hash a count of each letter
    let hash = new Map();

    for(let i = 0; i < s.length; i++){
        let count = hash.get(s[i]);

        // if count is truthy (key exists) add 1 to count
        if(count){
            hash.set(s[i], count + 1);
        }

        // otherwise enter character into hash with count of 1
        else{
            hash.set(s[i], 1);
        }
    }

    // then go through hash and add any even numbers to sum automatically
    // add first odd to palindrome, then for every odd after that we can use all but 1 of the characters (odd # -1)

    let oddUsed = false;
    let palindrome = 0;
    for(const [key, value] of hash){
        // if even add to palindrome count
        if(value % 2 === 0) palindrome += value;

        // if odd
        else{
            // if we have not added an odd value yet add number as is, then note that we used an odd
            if(!oddUsed){
                palindrome += value;
                oddUsed = true;
            }

            // if already used an odd, add value - 1 to the palindrome count
            else{
                palindrome += (value - 1);
            }
        }
    }

    // return the count for the largest one we can make at the end
    return palindrome;
};
