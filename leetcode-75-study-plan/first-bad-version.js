// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version
// is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example 1:
//     Input: n = 5, bad = 4
//     Output: 4
//     Explanation:
//     call isBadVersion(3) -> false
//     call isBadVersion(5) -> true
//     call isBadVersion(4) -> true
//     Then 4 is the first bad version.

// Example 2:
//     Input: n = 1, bad = 1
//     Output: 1

// Constraints:
//     1 <= bad <= n <= 231 - 1

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // could binary search this for O(logn) time, but if the bad one is early in the array we could wind up making many calls to the API
        // if trying to minimize the API calls we could look at this like the 2 crystal balls problem, where once we make 1 bad call we can only make one more before it breaks
        // to meet this constraint but also minimize runtime separate the array in sqrt(x) sections - NEED TO ROUND SQRT SO CHECKING WHOLE NUMBER VERSIONS & NOT MISSING ANY
        let sqrt = Math.floor(Math.sqrt(n));

        // iterate over array jumping by sqrt(x) until we find a bad version
        let i = 0;
        while(i < n){
            if(isBadVersion(i)) break;
            i += sqrt;
        }

        // would normally check if index has hit or exceeded length of n, if it has, no bad versions here - but instructions/constraints seem to guarantee bad always exists

        // subtract sqrt(x) to get back to the last known good version
        let j = i - sqrt;

        // then walk the array until find first bad version and return that index
        while(j <= i){
            if(isBadVersion(j)) return j;
            j++;
        }
    };
};
