// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
//     Input: s = "hello"
//     Output: "holle"

// Example 2:
//     Input: s = "leetcode"
//     Output: "leotcede"

// Constraints:
//     1 <= s.length <= 3 * 105
//     s consist of printable ASCII characters.

var reverseVowels = function(s) {
    // put all vowels into a set for easy O(1) lookup
    // need to split string to array (strings are immutable, can't do destructure swapping with string)
    // start a pointer at the beginning of the string and a pointer at the end of the string
    // if both pointers are at vowels swap these two characters then move both pointers
    // otherwise any pointer that is not on a vowel should be moved
    // stop loop when pointers meet/cross
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const array = s.split('');

    let start = 0;
    let end = s.length - 1;

    while (start < end){
        if(set.has(array[start]) && set.has(array[end])){
            [array[start], array[end]] = [array[end], array[start]];
            start++;
            end--;
        }
        else{
            if(!set.has(array[start])) start++;
            if(!set.has(array[end])) end --;
        }
    }

    return array.join('');
};
