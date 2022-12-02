// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
//     Input: s = "leetcode"
//     Output: 0

// Example 2:
//     Input: s = "loveleetcode"
//     Output: 2

// Example 3:
//     Input: s = "aabb"
//     Output: -1

// Constraints:
//     1 <= s.length <= 105
//     s consists of only lowercase English letters.

var firstUniqChar = function(s) {
    // make a hash to use as we go through the string, key will be letters, value will be object with indecies array and count
    let hash = new Map();
    // go through string
    for(let i = 0; i < s.length; i++){
        // if hash has the key, get the object, add i to the array, and increase count
        if(hash.has(s[i])){
            let obj = hash.get(s[i]);
            obj.count = obj.count + 1;
            obj.idxArray.push(i);
        }
        // if hash doesn't have the key, make an object with an array with i and a count of 1
        else{
            let obj = {
                count: 1,
                idxArray: [i]
            };
            hash.set(s[i], obj);
        }
    }

    // make an index variable and start it as -1
    let index = -1;
    // iterate over the hash - will happen in the order we inserted things, so we can determine which is the first one
    for(const [key, val] of hash){
        // if count is 1, set index to first thing in the indices aray
        if(val.count === 1){
            index = val.idxArray[0];
            break;
        }
    }

    // return the index
    return index;
};
