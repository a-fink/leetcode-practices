// You are given an array of words where each word consists of lowercase English letters.
// wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.
// For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
// A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially
// a word chain with k == 1.
// Return the length of the longest possible word chain with words chosen from the given list of words.

// Example 1:
//     Input: words = ["a","b","ba","bca","bda","bdca"]
//     Output: 4
//     Explanation: One of the longest word chains is ["a","ba","bda","bdca"].

// Example 2:
//     Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
//     Output: 5
//     Explanation: All the words can be put in a word chain ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].

// Example 3:
//     Input: words = ["abcd","dbqca"]
//     Output: 1
//     Explanation: The trivial word chain ["abcd"] is one of the longest word chains.
//     ["abcd","dbqca"] is not a valid word chain because the ordering of the letters is changed.

// Constraints:
//     1 <= words.length <= 1000
//     1 <= words[i].length <= 16
//     words[i] only consists of lowercase English letters.

var longestStrChain = function(words) {
    // make a memo cache
    const memo = new Map();

    // start best at 0
    let best = 0;

    // iterate over words array
    for(let i = 0; i < words.length; i++){
        // call helper to get length of chain for this word
        let L = chainMemo(words[i], words, memo);
        // if length larger than best update best
        if(L > best) best = L;
    }

    // return best
    return best;
};

function chainMemo(word, words, memo){
    // if word not in memo, calculate path & put in memo
    let wordLength = memo.get(word);

    if(!wordLength){
        // base cases
        let result = 0;
        // if word not in words array, it's invalid, no path
        if(!words.includes(word)) return 0;
        // if word is length one it is it's own longest path
        if(word.length === 1) return 1;

        // recursive steps
        // start best at 0
        let best = 0;
        // iterate over each letter in the word
        for(let i = 0; i < word.length; i++){
            // find remainder if this letter is removed
            const newWord = word.slice(0, i) + word.slice(i + 1);
            // length of path for this word is 1 (current letter) + path to get to this word from sub-word
            let length = 1 + chainMemo(newWord, words, memo);
            // if length larger than best update best
            if(length > best) best = length;
        }
        // update result to best
        result = best;
        // put word and result in hash map
        memo.set(word, result);
    }
    // return answer from hash map
    return memo.get(word);
}
