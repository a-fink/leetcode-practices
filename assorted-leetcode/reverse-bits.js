// Reverse bits of a given 32 bits unsigned integer.

// Note:
//     Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation,
//     as the integer's internal binary representation is the same, whether it is signed or unsigned.
//     In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed
//     integer -1073741825.

// Example 1:
//     Input: n = 00000010100101000001111010011100
//     Output:    964176192 (00111001011110000010100101000000)
//     Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

// Example 2:
//     Input: n = 11111111111111111111111111111101
//     Output:   3221225471 (10111111111111111111111111111111)
//     Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is
//     10111111111111111111111111111111.

// Constraints:
//     The input must be a binary string of length 32

// Follow up: If this function is called many times, how would you optimize it?


// followup portion - how to speed up if called multiple times
// make a hash map and once calculated put the input and output numbers in the hash map both ways so we build a lookup for each number & its reverse for future calls
let hash = new Map();

var reverseBits = function(n) {
    // constraints tell us we will always have a number that will give a 32bit binary string, so no need to check for null input

    // with hash added, we only need to do the calculations if n is not already a key in our hash
    if(!hash.has(n)){
        // toString method called on a number will give us a string representation of that number, can also give it a radix (base) to use in converting the number
        // we want n to be a string showing the binary digits so we give it the radix of 2.
        // this will drop any leading zeros so string length will be less than 32, after we reverse will need to add zeros at end to account for any dropped
        let binaryNumber = n.toString(2);

        // ORIGINALLY HAD A LOOP TO DO A DIVIDE AND CONQUER REVERSAL OF DIGIT PLACES IN O(LOGN) TIME, BUT THAT IS FORGETTING THAT STRINGS ARE IMMUTABLE IN JAVASCRIPT
        // IF HAVE TO SPLIT & JOIN THE STRING ANYWAY, PROBABLY BETTER TO JUST USE BUILT IN FUNCTIONS FOR CLEARNER CODE EVEN IF SLIGHTLY LESS EFFICIENT
        // use split/reverse/join to reverse all the digits
        binaryNumber = binaryNumber.split('').reverse().join('');

        // since out toString method above dropped leadning zeros, we need to put them back on the end of the reversed string until it reaches 32 characters in length
        // REMEMBER THAT STRINGS ARE IMMUTABLE SO NEED TO RE-ASSIGN TO STRING + 0 AT EACH STEP
        while(binaryNumber.length < 32){
            binaryNumber = binaryNumber + '0';
        }

        // put the original number & it's answer in the hash both ways
        // CASTING TO A NUMBER ADDS WAY TOO MANY EXTRA DIGITS (LARGER THAN 32 BIT) WHICH IS NOT WHAT WE WANT
        // need to use parseInt with a radix (base) of what number system the string is in to get back to a number
        let reversedNumber = parseInt(binaryNumber, 2);
        hash.set(n, reversedNumber);
        hash.set(reversedNumber, n);
    }

    // return the answer from the hash
    return hash.get(n);
};
