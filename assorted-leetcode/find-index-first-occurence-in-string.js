// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
//     Input: haystack = "sadbutsad", needle = "sad"
//     Output: 0
//     Explanation: "sad" occurs at index 0 and 6.
//     The first occurrence is at index 0, so we return 0.

// Example 2:
//     Input: haystack = "leetcode", needle = "leeto"
//     Output: -1
//     Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:
//     1 <= haystack.length, needle.length <= 104
//     haystack and needle consist of only lowercase English characters.

// ** WORK ON EDGE CASES IN MEDIUMS - FOUND WAY TO SOLVE PRETTY QUICKLY BUT MISSED SOME EDGE CASES & HAD TO RETRY A COUPLE TIMES **
var strStr = function(haystack, needle) {
    // edge case - if haystack is shorter than needle, but first few letters match we don't want a false positive
    if(haystack.length < needle.length) return -1;

    // start a pointer at the beginning of each string, and start a first occurance variable with null
    let hay = 0;
    let need = 0;
    let first = null;

    // if we find the beginning of an occurance but it turns out to not match all the way through, we need to account for repeated patterns in haystack
    // once we know an occurance has failed we need to re-set our search to run from one letter after where we originally found the first match
    let oldHay;

    // iterate through haystack
    while(hay < haystack.length){
      // if the pointer for needle has reached needle's length we found the full occurance, break the loop
      if(need >= needle.length) break;

      // if current char of haystack and needle match we have a possible occurance
      if(haystack[hay] === needle[need]){
          // if pointer for needle is at index zero and haystack still has enough length to accomodate the full needle (haystack's length - hay's current value >= needle length)
          // store this as possible start of first occurance, and store where we started from in haystack in case this fails
          if(need === 0 && haystack.length - hay >= needle.length){
              first = hay;
              oldHay = hay;
          }
          // increment pointer for needle to keep searching both strings
          need++;
      }

      // if current chars do not match
      else{
          // if first has been moved to anything other than null, we need to reset everything
          // set first occurance back to null, needle's pointer back to 0 (start of needle), and set hay to oldHay
          if(first !== null){
              first = null;
              need = 0;
              hay = oldHay;
          }
      }

      // always increment pointer for haystack to keep traversing string
      hay++;
    }

    // at end if first occurance is null we didn't find, return -1
    if(first === null) return -1;

    // otherwise return first occurance
    return first;
  };
