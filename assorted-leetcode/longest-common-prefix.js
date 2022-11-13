// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
//     Input: strs = ["flower","flow","flight"]
//     Output: "fl"

// Example 2:
//     Input: strs = ["dog","racecar","car"]
//     Output: ""
//     Explanation: There is no common prefix among the input strings.

// Constraints:
//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function(strs) {
    // make prefix string to hold answer
    // make index var for string starting at 0
    // make a matches boolean that starts true
    let prefix = "";
    let idx = 0;
    let matches = true;

    // if strings only has 1 word, that word is the longest prefix
    if(strs.length === 1){
        return strs[0];
    }

    // while matches is true
    while(matches){
        // get letter from array[0][index]
        const letter = strs[0][idx];

        // if letter undefined set matches false and break
        if(!letter){
            matches = false;
            break;
        }

        // iterate through array 1->length and compare word[index] to letter
        for(let i = 1; i < strs.length; i++){
            // if(dont match) set matches to false, break for loop
            if(letter !== strs[i][idx]){
                matches = false;
                break;
            }

            // if at last word and it matches, push onto prefix
            if(i === strs.length - 1){
                prefix += letter;
            }
        }

        // increase index
        idx++;
    }

    // return prefix
    return prefix;
};
