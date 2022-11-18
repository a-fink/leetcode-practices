// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
// Note:
//     Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation,
//     as the integer's internal binary representation is the same, whether it is signed or unsigned.
//     In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

// Example 1:
//     Input: n = 00000000000000000000000000001011
//     Output: 3
//     Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// Example 2:
//     Input: n = 00000000000000000000000010000000
//     Output: 1
//     Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

// Example 3:
//     Input: n = 11111111111111111111111111111101
//     Output: 31
//     Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

// Constraints:
//     The input must be a binary string of length 32.

// Follow up: If this function is called many times, how would you optimize it?


// to speed up use a hash to store previously calculated counts
let hash = new Map();

var hammingWeight = function(n) {
    // constraints tell us n will always be a number that gives a 32bit binary string, so don't need to check for null input

    // if not already in the hash, calculate the count and store in hash
    if(!hash.has(n)){
        // use to-string with radix to get string of binary digits
        let string = n.toString(2);

        // iterate over string & count the number of 1s
        let count = 0;
        for(let i = 0; i < string.length; i++){
            if(string[i] === '1') count++;
        }

        // store count in hash
        hash.set(n, count);
    }

    // return answer from hash
    return hash.get(n);
};
